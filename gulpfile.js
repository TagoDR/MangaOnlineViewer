import * as esbuild from 'esbuild';
import fs from 'fs';
import gulp from 'gulp';
import file from 'gulp-file';
import preprocess from 'gulp-preprocess';
import gulpTypescript from 'gulp-typescript';
import { rollup } from 'rollup';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import html from 'rollup-plugin-string-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import userscript from 'userscript-meta';
import typescriptPlugin from 'rollup-plugin-typescript';
import liveServer from 'live-server';
import { tsImport } from 'ts-import';
import prettier from 'gulp-prettier';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const scripts = {
  main: {
    entry: 'userscript-main.ts',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
    banner: './src/meta-main.ts',
  },
  adult: {
    entry: 'userscript-adult.ts',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
    banner: './src/meta-adult.ts',
  },
};

function buildUserscriptEsbuild(script) {
  // run esbuild configuration
  return esbuild
    .build({
      banner: {
        js:
          fs.readFileSync(`./dist/${script.meta}`, 'utf8') +
          `\n var W = (typeof unsafeWindow === 'undefined') ? window : unsafeWindow; \n
              /* global $:readonly, JSZip:readonly ,NProgress:readonly , jscolor:readonly , ColorScheme:readonly , Swal:readonly */`,
      },
      entryPoints: [`src/${script.entry}`],
      logLevel: 'debug',
      bundle: true,
      outfile: `dist/${script.name}`,
      plugins: [nodeExternalsPlugin()],
      // watch: isDev,
      // minify: isProd,
      // sourcemap: isDev && 'inline',
    })
    .catch((e) => {
      console.log(e);
      // process.exit(1);
    })
    .finally(() => {
      // console.log(`${script.name} Created`);
      // process.exit(0);
    });
}

function buildUserscriptRollup(script) {
  return rollup({
    input: `src/${script.entry}`,
    plugins: [
      excludeDependenciesFromBundle(),
      nodeResolve({
        preferBuiltins: false,
        extensions: ['.js', '.ts', '.tsx'],
      }),
      typescriptPlugin(),
      commonjs({
        include: ['node_modules/**'],
        exclude: ['node_modules/process-es6/**'],
      }),
      html({
        include: './src/components/**',
      }),
      eslint({
        // fix: true,
        filterExclude: ['node_modules/**', 'src/components/**'],
      }),
      cleanup({
        comments: 'none',
        // normalizeEols: 'win',
      }),
    ],
  }).then((bundle) =>
    bundle.write({
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
    }),
  );
}

function createMetadata() {
  const tsProject = gulpTypescript.createProject('tsconfig.json', {
    strict: false,
    target: 'es6',
    rootDir: 'src',
    lib: ['dom', 'es6'],
    strictNullChecks: false,
  });
  return gulp
    .src('./src/**.ts', { base: 'src' })
    .pipe(gulpTypescript(tsProject()))
    .pipe(gulp.dest('dist/header'));
}

async function createMetaMain() {
  const s = await tsImport.compile(scripts.main.banner);
  return file(scripts.main.meta, userscript.stringify(s.default, { src: true })).pipe(
    gulp.dest('./dist'),
  );
}

async function createMetaAdult() {
  const s = await tsImport.compile(scripts.adult.banner);
  return file(scripts.adult.meta, userscript.stringify(s.default, { src: true })).pipe(
    gulp.dest('./dist'),
  );
}

function beauty() {
  return gulp
    .src('./dist/*.js')
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest('./dist/'));
}

function move() {
  return gulp.src(['dist/*.meta.js', 'dist/*.user.js', 'dist/readme.md']).pipe(gulp.dest('.'));
}

async function readme() {
  const s = await tsImport.compile('./src/readme.ts');
  return gulp
    .src('./src/readme.md')
    .pipe(
      preprocess({
        context: {
          LIST_MANGA_SITES: s.mangaSites,
          LIST_COMIC_SITES: s.comicSites,
          LIST_HENTAI_SITES: s.hentaiSites,
          BOOKMARKLET: s.bookmarklet,
        },
      }),
    )
    .pipe(gulp.dest('./dist/'));
}

function server() {
  liveServer.start({
    root: './dist/',
    open: true,
  });
}

// const bundler = buildUserscriptEsbuild;
const bundler = buildUserscriptRollup;

function createScriptMain() {
  return bundler(scripts.main);
}

function createScriptAdult() {
  return bundler(scripts.adult);
}

function watch() {
  gulp.watch(
    ['./src/*.*'],
    gulp.parallel(
      () => buildUserscriptEsbuild(scripts.main),
      () => buildUserscriptEsbuild(scripts.adult),
    ),
  );
}

gulp.task('test', createMetadata);
gulp.task('dev', gulp.parallel(server, watch));
gulp.task('main', gulp.series(createMetaMain, createScriptMain));
gulp.task('adult', gulp.series(createMetaAdult, createScriptAdult));
gulp.task('build', gulp.parallel('main', 'adult', readme));
gulp.task('release', gulp.series('build', beauty, move));
gulp.task('default', gulp.series('release'));
