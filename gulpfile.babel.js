import fs from 'fs';
import gulp from 'gulp';
import file from 'gulp-file';
import beautify from 'gulp-jsbeautify';
import preprocess from 'gulp-preprocess';
import R from 'ramda';
import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import userscript from 'userscript-meta';
import pkg from './package.json';
import metaAdult from './src/meta-adult';
import metaMain from './src/meta-main';
import { comicSites, hentaiSites, mangaSites } from './src/readme';

const scripts = {
  main: {
    entry: 'userscript-main.js',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
    sitesFolder: './src/main',
  },
  adult: {
    entry: 'userscript-adult.js',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
    sitesFolder: './src/adult',
  },
};

function buildUserscript(entryFile, destFile, metaFile) {
  return rollup({
    input: entryFile,
    external: R.keys(pkg.dependencies),
    plugins: [
      commonjs(), // {namedExports: {'./src/sites-metaAdult.js': ['sites']}}),
      eslint({ fix: true }),
      babel({
        babelrc: false,
        presets: [
          [
            'airbnb', {
              modules: false,
              targets: {
                node: 12,
              //   chrome: 59,
              //   opera: 46,
              //   firefox: 52,
              //   safari: 10,
              //   edge: 14,
              },
            },
          ],
        ],
        plugins: [
          '@babel/external-helpers',
        ],
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
      cleanup({
        comments: 'none',
        normalizeEols: 'win',
      }),
    ],
  }).then((bundle) => bundle.write({
    banner: fs.readFileSync(metaFile, 'utf8'),
    intro: 'var W = (typeof unsafeWindow === undefined) ? window : unsafeWindow;',
    format: 'iife',
    file: destFile,
    globals: {
      'color-scheme': 'ColorScheme',
      jquery: '$',
      jscolor: 'jscolor',
      jszip: 'JSZip',
      nprogress: 'NProgress',
      ramda: 'R',
      sweetalert: 'Swal',
    },
    // sourceMap: 'inline',
  }));
}

gulp.task('meta_main', (done) => {
  file(scripts.main.meta, userscript.stringify(metaMain), { src: true })
    .pipe(gulp.dest('./dist'));
  done();
});

gulp.task('meta_adult', (done) => {
  file(scripts.adult.meta, userscript.stringify(metaAdult), { src: true })
    .pipe(gulp.dest('./dist'));
  done();
});

gulp.task('script_main',
  () => buildUserscript(`src/${scripts.main.entry}`, `dist/${scripts.main.name}`,
    `./dist/${scripts.main.meta}`));

gulp.task('script_adult', () => buildUserscript(`src/${scripts.adult.entry}`,
  `dist/${scripts.adult.name}`, `./dist/${scripts.adult.meta}`));

gulp.task('readme', (done) => {
  gulp.src('./src/readme.md')
    .pipe(preprocess({
      context: {
        LIST_MANGA_SITES: mangaSites,
        LIST_COMIC_SITES: comicSites,
        LIST_HENTAI_SITES: hentaiSites,
      },
    })) // To set environment variables in-line
    .pipe(gulp.dest('./dist/'));
  done();
});

gulp.task('beautify', (done) => {
  gulp.src('./dist/*.js')
    .pipe(beautify({
      indent_size: 2,
    }))
    .pipe(gulp.dest('./dist/'));
  done();
});

gulp.task('move', (done) => {
  gulp.src('dist/**.*')
    .pipe(gulp.dest('.'));
  done();
});

gulp.task('main', gulp.series('meta_main', 'script_main'));
gulp.task('adult', gulp.series('meta_adult', 'script_adult'));
gulp.task('build', gulp.parallel('main', 'adult'));

gulp.task('release', gulp.series(
  gulp.parallel(
    'build',
    'readme',
  ),
  'beautify',
  'move',
));
