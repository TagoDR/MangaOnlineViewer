/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import userscript from 'userscript-metadata-generator';
import externalGlobals from 'rollup-plugin-external-globals';
import fs from 'fs';
import metaMain from './src/meta/meta-main';
import metaAdult from './src/meta/meta-adult';
import metaDev from './src/meta/meta-dev';
import { bookmarklet, comicSites, hentaiSites, mangaSites } from './src/meta/readme';

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
    meta: 'Manga_OnlineViewer_Dev.meta.js',
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
  'hotkeys-js': 'hotkeys',
  'range-slider-input': 'rangeSlider',
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
  const banner = userscript(script.banner);
  fs.writeFileSync(`./dist/${script.meta}`, banner, 'utf8');
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
      outDir: 'dist',
      rollupOptions: {
        input: `src/${scripts[target].entry}`,
        plugins: [externalGlobals(globals)],
        output: {
          banner: metadata,
          format: 'iife',
          entryFileNames: scripts[target].name,
          sourcemap: false,
        },
      },
    },
  };
});
