import * as esbuild from 'esbuild';
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates';
import { globalExternals } from '@fal-works/esbuild-plugin-global-externals';
import fs from 'fs';
import gulp from 'gulp';
import preprocess from 'gulp-preprocess';
import userscript from 'userscript-meta';
import * as tsImport from 'ts-import';
import Del from 'del';
import { build } from 'vite';
import externalGlobals from 'rollup-plugin-external-globals';

let minify = false;
let vite = false;
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
  'color-scheme': 'ColorScheme',
  jquery: '$',
  jscolor: 'jscolor',
  jszip: 'JSZip',
  sweetalert2: 'Swal',
  nprogress: 'NProgress',
};

function buildUserscript(script) {
  function createScriptFile() {
    const metadata = fs.readFileSync(`./dist/${script.meta}`, 'utf8');
    if (vite) {
      return build({
        configFile: false,
        esbuild: {
          banner: metadata,
          keepNames: true,
        },
        build: {
          minify: 'esbuild',
          emptyOutDir: false,
          rollupOptions: {
            license: false,
            input: `src/${script.entry}`,
            plugins: [externalGlobals(globals)],
            output: {
              format: 'iife',
              entryFileNames: script.name,
            },
          },
        },
      });
    } else {
      return esbuild
        .build({
          banner: {
            js: metadata,
          },
          entryPoints: [`src/${script.entry}`],
          logLevel: 'info',
          bundle: true,
          outfile: `dist/${script.name}`,
          // watch: true,
          minify: minify,
          keepNames: true,
          legalComments: 'none',
          plugins: [minifyTemplates(), writeFiles(), globalExternals(globals)],
          write: !minify,
          // sourcemap: minify ? false : 'inline',
        })
        .catch((e) => {
          console.log(e);
          process.exit(1);
        })
        .finally(() => {
          // console.log(`${script.name} Created`);
          // process.exit(0);
        });
    }
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

function clean() {
  return Del(['node_modules/ts-import/cache', 'dist/*']);
}

function prep() {
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }
  minify = true;
  vite = true;
  return Promise.resolve();
}

gulp.task('clean', clean);
// gulp.task('readme', readme);
// gulp.task('main',gulp.series(clean, writeMetadata(scripts.main), buildUserscript(scripts.main)));
// gulp.task('adult',gulp.series(clean, writeMetadata(scripts.adult), buildUserscript(scripts.adult)));
gulp.task('dev', gulp.series(writeMetadata(scripts.dev), buildUserscript(scripts.dev)));
gulp.task(
  'build',
  gulp.series(
    clean,
    gulp.parallel(writeMetadata(scripts.main), writeMetadata(scripts.adult)),
    gulp.parallel(buildUserscript(scripts.main), buildUserscript(scripts.adult)),
  ),
);
gulp.task(
  'release',
  gulp.series(
    prep,
    clean,
    gulp.parallel(writeMetadata(scripts.main), writeMetadata(scripts.adult), readme),
    gulp.parallel(buildUserscript(scripts.main), buildUserscript(scripts.adult)),
    move,
  ),
);

gulp.task('default', gulp.series('release'));
