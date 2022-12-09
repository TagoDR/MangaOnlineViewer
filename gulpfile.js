import { deleteAsync } from 'del';
import fs from 'fs';
import gulp from 'gulp';
import preprocess from 'gulp-preprocess';
import externalGlobals from 'rollup-plugin-external-globals';
import * as tsImport from 'ts-import';
import userscript from 'userscript-meta';
import { build as vite } from 'vite';

let mode = 'development';
const scripts = {
  main: {
    entry: 'userscript-main.ts',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
    banner: './src/meta/meta-main.ts',
  },
  adult: {
    entry: 'userscript-adult.ts',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
    banner: './src/meta/meta-adult.ts',
  },
  dev: {
    entry: 'userscript-dev.ts',
    name: 'Manga_OnlineViewer_Dev.user.js',
    meta: 'Manga_OnlineViewer_Dev.meta.js',
    banner: './src/meta/meta-dev.ts',
  },
};
const globals = {
  tinycolor2: 'tinycolor',
  jszip: 'JSZip',
  sweetalert2: 'Swal',
  nprogress: 'NProgress',
  imagesloaded: 'imagesLoaded',
  'file-saver': 'FileSaver',
  lodash: '_',
};

function buildUserscript(script) {
  function createScriptFile() {
    const metadata = fs.readFileSync(`./dist/${script.meta}`, 'utf8');
    return vite({
      mode: mode,
      configFile: false,
      esbuild: {
        keepNames: true,
      },
      build: {
        target: 'esnext',
        minify: false,
        emptyOutDir: false,
        rollupOptions: {
          input: `src/${script.entry}`,
          plugins: [externalGlobals(globals)],
          output: {
            banner: metadata,
            format: 'iife',
            entryFileNames: script.name,
            sourcemap: false, //mode === 'development' ? 'inline' : false,
          },
        },
      },
    });
  }

  return createScriptFile;
}

function writeMetadata(script) {
  async function createMetadataFile() {
    const metadata = await tsImport.load(script.banner, {
      mode: tsImport.LoadMode.Compile,
    });
    const banner = userscript.stringify(metadata.default);
    fs.writeFileSync(`./dist/${script.meta}`, banner);
    return Promise.resolve(banner);
  }

  return createMetadataFile;
}

function move() {
  return gulp.src(['dist/*.meta.js', 'dist/*.user.js', 'dist/readme.md']).pipe(gulp.dest('.'));
}

async function readme() {
  const { bookmarklet, comicSites, hentaiSites, mangaSites } = await tsImport.load(
    './src/meta/readme.ts',
    { mode: tsImport.LoadMode.Compile },
  );
  return gulp
    .src('./src/meta/readme.md')
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

function prep(buildMode = 'development') {
  function prepare() {
    if (!fs.existsSync('./dist')) {
      fs.mkdirSync('./dist', { recursive: true });
    }
    mode = buildMode;
    return deleteAsync(['node_modules/ts-import/cache', 'dist/*']);
  }

  return prepare;
}

gulp.task('dev',
  gulp.series(
    prep('development'),
    writeMetadata(scripts.dev),
    buildUserscript(scripts.dev),
  ),
);
gulp.task(
  'release',
  gulp.series(
    prep('production'),
    gulp.parallel(writeMetadata(scripts.main), writeMetadata(scripts.adult), readme),
    gulp.parallel(buildUserscript(scripts.main), buildUserscript(scripts.adult)),
    move,
  ),
);
gulp.task('default', gulp.series('release'));
