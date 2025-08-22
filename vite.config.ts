/**
 * @file Vite configuration file for building the Manga Online Viewer userscripts.
 * This configuration handles three different build modes: 'main', 'adult', and 'dev'.
 * It uses Vite with Rollup plugins to bundle the TypeScript source code, handle external dependencies,
 * generate userscript metadata, and format the final output.
 */

import * as fs from 'node:fs';
import externalGlobals from 'rollup-plugin-external-globals';
import prettier from 'rollup-plugin-prettier';
import userscript, { type Metadata } from 'userscript-metadata-generator';
import { defineConfig } from 'vite';
import viteBanner from 'vite-plugin-banner';
import svgLoader from 'vite-svg-loader';
import metaAdult from './src/meta/meta-adult';
import metaDev from './src/meta/meta-dev';
import metaMain from './src/meta/meta-main';
import { bookmarklet, comicSites, hentaiSites, mangaSites } from './src/meta/readme';

/**
 * Defines the structure for a script build configuration.
 */
interface IScript {
  /** The entry point file for the script. */
  entry: string;
  /** The output filename for the bundled userscript. */
  name: string;
  /** The output filename for the metadata block. */
  meta: string;
  /** The metadata object for the userscript banner. */
  banner: Partial<Tampermonkey.ScriptMetadata> | Metadata;
}

/**
 * A record containing the build configurations for each script version.
 * @internal
 */
const scripts: Record<string, IScript> = {
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

/**
 * A mapping of external dependencies to their global variable names.
 * This is used by `rollup-plugin-external-globals` to avoid bundling these libraries.
 * @internal
 */
const globals = {
  'blob-util': 'blobUtil',
  'hotkeys-js': 'hotkeys',
  imagesloaded: 'imagesLoaded',
  jszip: 'JSZip',
  lodash: '_',
  nprogress: 'NProgress',
  'range-slider-input': 'rangeSlider',
  'sweetalert2-neutral': 'Swal',
  tinycolor2: 'tinycolor',
  bowser: 'bowser',
};

/**
 * Generates the main README.md file by replacing placeholders in a template file
 * with dynamically generated content, such as the list of supported sites.
 * @internal
 */
function generateReadme() {
  const readmefile = fs
    .readFileSync('./src/meta/readme.md', 'utf8')
    .replace('<!-- @echo LIST_MANGA_SITES -->', mangaSites)
    .replace('<!-- @echo LIST_COMIC_SITES -->', comicSites)
    .replace('<!-- @echo LIST_HENTAI_SITES -->', hentaiSites)
    .replaceAll('<!-- @echo BOOKMARKLET -->', bookmarklet);
  fs.writeFileSync('./readme.md', readmefile, 'utf8');
}

/**
 * Generates and writes the .meta.js file for a given script.
 * @internal
 * @param {IScript} script - The script configuration object.
 * @returns {string} The generated metadata banner as a string.
 */
function generateMetadata(script: IScript): string {
  const banner = userscript(script.banner as Metadata);
  fs.writeFileSync(`./dist/${script.meta}`, banner, 'utf8');
  return banner;
}

/**
 * The main Vite configuration function.
 * It determines the build target based on the Vite mode (`main`, `adult`, or `dev`)
 * and returns the appropriate configuration for that target.
 */
export default defineConfig(({ mode }) => {
  const target = mode === 'main' || mode === 'adult' ? mode : 'dev';
  if (target === 'dev' && !fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true });
  }
  if (target !== 'dev') generateReadme();
  const metadata = generateMetadata(scripts[target]);
  return {
    mode: target === 'dev' ? 'development' : 'production',
    plugins: [
      viteBanner({ content: metadata, verify: false }),
      svgLoader({ svgo: false, defaultImport: 'raw' }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      emptyOutDir: false,
      outDir: 'dist',
      rollupOptions: {
        input: `src/${scripts[target].entry}`,
        plugins: [
          externalGlobals(globals),
          target !== 'dev' ? prettier({ parser: 'babel-ts' }) : null,
        ],
        output: {
          format: 'iife',
          entryFileNames: scripts[target].name,
          sourcemap: false,
        },
      },
    },
  };
});
