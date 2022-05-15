import fs from 'fs';
import gulp from 'gulp';
import file from 'gulp-file';
import preprocess from 'gulp-preprocess';
import { rollup } from 'rollup';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import html from 'rollup-plugin-string-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import userscript from 'userscript-meta';
import typescriptPlugin from '@rollup/plugin-typescript';
import typescript from 'typescript';
import liveServer from 'live-server';
import metaAdult from './src/meta-adult.js';
import metaMain from './src/meta-main.js';
import {
  bookmarklet, comicSites, hentaiSites, mangaSites,
} from './src/readme.js';

const scripts = {
  main: {
    entry: 'userscript-main.ts',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
  },
  adult: {
    entry: 'userscript-adult.ts',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
  },
};

function buildUserscriptRollup(script) {
  return rollup({
    input: `src/${script.entry}`,
    plugins: [
      nodeResolve({
        preferBuiltins: false,
        extensions: ['.js', '.ts', '.tsx'],
      }),
      typescriptPlugin({ typescript }),
      commonjs({
        include: ['node_modules/**'],
        exclude: ['node_modules/process-es6/**'],
      }),
      html({
        include: './src/components/**',
      }),
      eslint({
        fix: true,
        filterExclude: ['node_modules/**', 'src/components/**'],
      }),
      cleanup({
        comments: 'none',
        normalizeEols: 'win',
      }),
    ],
  })
    .then((bundle) => bundle.write({
      banner: fs.readFileSync(`./dist/${script.meta}`, 'utf8'),
      intro: `var W = (typeof unsafeWindow === 'undefined') ? window : unsafeWindow; \n
              /* global $:readonly, JSZip:readonly ,NProgress:readonly , jscolor:readonly , ColorScheme:readonly , Swal:readonly */`,
      format: 'iife',
      file: `dist/${script.name}`,
      globals: {
        'color-scheme': 'ColorScheme',
        jquery: '$',
        jscolor: 'jscolor',
        jszip: 'JSZip',
        nprogress: 'NProgress',
        sweetalert: 'Swal',
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    }));
}

function createMetaMain() {
  return file(scripts.main.meta, userscript.stringify(metaMain), { src: true })
    .pipe(gulp.dest('./dist'));
}

function createMetaAdult() {
  return file(scripts.adult.meta, userscript.stringify(metaAdult), { src: true })
    .pipe(gulp.dest('./dist'));
}

function createScriptMain() {
  return buildUserscriptRollup(scripts.main);
}

function createScriptAdult() {
  return buildUserscriptRollup(scripts.adult);
}

function move() {
  return gulp.src('dist/**.*')
    .pipe(gulp.dest('.'));
}

function readme() {
  return gulp.src('./src/readme.md')
    .pipe(preprocess({
      context: {
        LIST_MANGA_SITES: mangaSites,
        LIST_COMIC_SITES: comicSites,
        LIST_HENTAI_SITES: hentaiSites,
        BOOKMARKLET: bookmarklet,
      },
    }))
    .pipe(gulp.dest('./dist/'));
}

function server() {
  liveServer.start({
    root: './dist/',
    open: true,
  });
}

function watch() {
  gulp.watch(['./src/*.*'], gulp.parallel(createScriptMain, createScriptAdult));
}

gulp.task('readme', readme);
gulp.task('dev', gulp.parallel(server, watch));
gulp.task('main', gulp.series(createMetaMain, createScriptMain));
gulp.task('adult', gulp.series(createMetaAdult, createScriptAdult));
gulp.task('build', gulp.parallel(gulp.series(createMetaMain, createScriptMain), gulp.series(createMetaAdult, createScriptAdult), readme));
gulp.task('release', gulp.series(gulp.parallel(gulp.series(createMetaMain, createScriptMain), gulp.series(createMetaAdult, createScriptAdult), readme),  move));
gulp.task('default', gulp.series(gulp.parallel(gulp.series(createMetaMain, createScriptMain), gulp.series(createMetaAdult, createScriptAdult), readme),  move));
