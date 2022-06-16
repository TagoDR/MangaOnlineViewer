// import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
// import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { globalExternals } from '@fal-works/esbuild-plugin-global-externals';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import Del from 'del';
import * as esbuild from 'esbuild';
import fs from 'fs';
import gulp from 'gulp';
import file from 'gulp-file';
import preprocess from 'gulp-preprocess';
import prettier from 'gulp-prettier';
import liveServer from 'live-server';
import { rollup } from 'rollup';
import cleanup from 'rollup-plugin-cleanup';
import externalGlobals from 'rollup-plugin-external-globals';
import html from 'rollup-plugin-string-html';
import typescriptPlugin from 'rollup-plugin-typescript';
import { tsImport } from 'ts-import';
import userscript from 'userscript-meta';

const bundle = 1; // 1 = Rollup , 2 = Esbuild
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
const globals = {
  'color-scheme': 'ColorScheme',
  jquery: '$',
  jscolor: 'jscolor',
  jszip: 'JSZip',
  sweetalert2: 'Swal',
  nprogress: 'NProgress',
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
      // plugins: [nodeExternalsPlugin()],
      // watch: isDev,
      // minify: isProd,
      sourcemap: 'inline',
      plugins: [globalExternals(globals)],
    })
    .catch((e) => {
      console.log(e);
      process.exit(1);
    })
    .finally(() => {
      // console.log(`${script.name} Created`);
      process.exit(0);
    });
}

function buildUserscriptRollup(script) {
  return rollup({
    input: `src/${script.entry}`,
    plugins: [
      // excludeDependenciesFromBundle(),
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
      externalGlobals(globals),
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
      globals: globals,
    }),
  );
}

// function compileTypescript() {
//   const tsProject = gulpTypescript.createProject('tsconfig.json', {
//     strict: false,
//     target: 'es6',
//     rootDir: 'src',
//     lib: ['dom', 'es6'],
//     strictNullChecks: false,
//   });
//   return gulp
//     .src('src/**/*.ts', { base: 'src' })
//     .pipe(gulpTypescript(tsProject()))
//     .pipe(gulp.dest('dist/out'));
// }

async function createMetadata(script) {
  const metaData = await tsImport.compile(script.banner);
  return file(script.meta, userscript.stringify(metaData.default), { src: true }).pipe(
    gulp.dest('./dist'),
  );
}

async function createMetaMain() {
  return createMetadata(scripts.main);
}

async function createMetaAdult() {
  return createMetadata(scripts.adult);
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
  const { bookmarklet, comicSites, hentaiSites, mangaSites } = await tsImport.compile(
    './src/readme.ts',
  );
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
    )
    .pipe(gulp.dest('./dist/'));
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

function server() {
  liveServer.start({
    root: './dist/',
    open: true,
  });
}

function createScriptMain() {
  if (bundle === 1) return buildUserscriptRollup(scripts.main);
  if (bundle === 2) return buildUserscriptEsbuild(scripts.main);
  return buildUserscriptRollup(scripts.main);
}

function createScriptAdult() {
  if (bundle === 1) return buildUserscriptRollup(scripts.adult);
  if (bundle === 2) return buildUserscriptEsbuild(scripts.adult);
  return buildUserscriptRollup(scripts.adult);
}

function clean() {
  return Del(['node_modules/ts-import/cache']);
}

// gulp.task('clean', clean);
// gulp.task('readme', readme);
// gulp.task('main', gulp.series(clean,createMetaMain, createScriptMain));
// gulp.task('adult', gulp.series(clean,createMetaAdult, createScriptAdult));
gulp.task(
  'build',
  gulp.series(
    clean,
    gulp.parallel(createMetaMain, createMetaAdult),
    gulp.parallel(createScriptMain, createScriptAdult),
  ),
);
gulp.task('release', gulp.series('build', readme, beauty, move));
gulp.task('serve', gulp.series('build', gulp.parallel(server, watch)));
gulp.task('default', gulp.series('release'));
