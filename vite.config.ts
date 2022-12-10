/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
// @ts-ignore
import userscript from 'userscript-meta';
import fs from 'fs';
// @ts-ignore
import externalGlobals from 'rollup-plugin-external-globals';
import metaMain from './src/meta/meta-main';
import metaAdult from './src/meta/meta-adult';
import metaDev from './src/meta/meta-dev';
import { bookmarklet, comicSites, hentaiSites, mangaSites } from './src/meta/readme.js';

const scripts = {
  main: {
    entry: 'userscript-main.ts',
    name: 'Manga_OnlineViewer.user.js',
    meta: 'Manga_OnlineViewer.meta.js',
    banner: metaMain,
  },
  adult: {
    entry: 'userscript-adult.ts',
    name: 'Manga_OnlineViewer_Adult.user.js',
    meta: 'Manga_OnlineViewer_Adult.meta.js',
    banner: metaAdult,
  },
  dev: {
    entry: 'userscript-dev.ts',
    name: 'Manga_OnlineViewer_Dev.user.js',
    meta: './dist/Manga_OnlineViewer_Dev.meta.js',
    banner: metaDev,
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

function generateReadme() {
  const readmefile = fs
    .readFileSync('./src/meta/readme.md', 'utf8')
    .replace('<!-- @echo LIST_MANGA_SITES -->', mangaSites)
    .replace('<!-- @echo LIST_COMIC_SITES -->', comicSites)
    .replace('<!-- @echo LIST_HENTAI_SITES -->', hentaiSites)
    .replaceAll('<!-- @echo BOOKMARKLET -->', bookmarklet);
  fs.writeFileSync('./readme.md', readmefile, 'utf8');
}

function generateMetadata(script: any) {
  const banner = userscript.stringify(script.banner);
  fs.writeFileSync(script.meta, banner, 'utf8');
  return banner;
}

export default defineConfig(({ mode }) => {
  const target = mode === 'main' || mode === 'adult' ? mode : 'dev';
  if (target === 'dev' && !fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }
  if (target !== 'dev') generateReadme();
  const metadata = generateMetadata(scripts[target]);
  return {
    mode: target === 'dev' ? 'development' : 'production',
    build: {
      target: 'esnext',
      minify: false,
      emptyOutDir: false,
      outDir: target === 'dev' ? 'dist' : '',
      rollupOptions: {
        input: `src/${scripts[target].entry}`,
        plugins: [externalGlobals(globals)],
        output: {
          banner: metadata,
          format: 'iife',
          entryFileNames: scripts[target].name,
          sourcemap: false, // target === 'dev' ? 'inline' : false,
        },
      },
    },
  };
});
