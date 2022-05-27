import fs from 'fs';
import gulp from 'gulp';
import file from 'gulp-file';
import beautify from 'gulp-prettier';
import preprocess from 'gulp-preprocess';
import { rollup } from 'rollup';
import babel from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import html from 'rollup-plugin-string-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import userscript from 'userscript-meta';
import metaAdult from './src/meta-adult';
import metaMain from './src/meta-main';
import rollupExternalGlobals from 'rollup-plugin-external-globals';
import { bookmarklet, comicSites, hentaiSites, mangaSites } from './src/readme';

const scripts = {
  main: {
    entry: 'userscript-main.js',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
  },
  adult: {
    entry: 'userscript-adult.js',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
  },
};
const globals = {
  'color-scheme': 'ColorScheme',
  jquery: '$',
  jscolor: 'jscolor',
  jszip: 'JSZip',
  sweetalert2: 'Swal',
  nprogress: 'NProgress',
};

function buildUserscriptRollup(script) {
  return rollup({
    input: `src/${script.entry}`,
    plugins: [
      nodeResolve({ preferBuiltins: false, extensions: ['.js', '.ts', '.tsx'] }),
      commonjs(),
      html({
        include: './src/components/**',
        minifier: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true,
          minifyJS: true,
          minifyCSS: true,
        },
      }),
      eslint({
        fix: true,
        filterExclude: ['node_modules/**', 'src/components/**'],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      rollupExternalGlobals(globals),
      cleanup({
        comments: 'none',
        normalizeEols: 'win',
      }),
    ],
  }).then((bundle) =>
    bundle.write({
      banner: fs.readFileSync(`./dist/${script.meta}`, 'utf8'),
      intro: `var W = (typeof unsafeWindow === 'undefined') ? window : unsafeWindow;
              /* global $:readonly, JSZip:readonly ,NProgress:readonly , jscolor:readonly , ColorScheme:readonly , Swal:readonly */`,
      format: 'iife',
      file: `dist/${script.name}`,
      globals: globals,
      // sourceMap: 'inline',
    }),
  );
}

function createMetaMain() {
  return file(scripts.main.meta, userscript.stringify(metaMain), { src: true }).pipe(
    gulp.dest('./dist'),
  );
}

function createMetaAdult() {
  return file(scripts.adult.meta, userscript.stringify(metaAdult), { src: true }).pipe(
    gulp.dest('./dist'),
  );
}

function createScriptMain() {
  return buildUserscriptRollup(scripts.main);
}

function createScriptAdult() {
  return buildUserscriptRollup(scripts.main);
}

function beauty() {
  return gulp
    .src('./dist/*.js')
    .pipe(
      beautify({
        indent_size: 2,
      }),
    )
    .pipe(gulp.dest('./dist/'));
}

function move() {
  return gulp.src('dist/**.*').pipe(gulp.dest('.'));
}

function readme() {
  return gulp
    .src('./src/readme.md')
    .pipe(
      preprocess({
        context: {
          LIST_MANGA_SITES: mangaSites,
          LIST_COMIC_SITES: comicSites,
          LIST_HENTAI_SITES: hentaiSites,
          BOOKMARKLET: bookmarklet,
        },
      }),
    ) // To set environment variables in-line
    .pipe(gulp.dest('./dist/'));
}

gulp.task('readme', readme);
gulp.task('main', gulp.series(createMetaMain, createScriptMain));
gulp.task('adult', gulp.series(createMetaAdult, createScriptAdult));
gulp.task('build', gulp.parallel('main', 'adult', 'readme'));
gulp.task('release', gulp.series('build', beauty, move));
gulp.task('default', gulp.series('release'));
