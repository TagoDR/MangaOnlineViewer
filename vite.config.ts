/**
 * @file Vite configuration file for building the Manga Online Viewer userscripts.
 * This configuration handles three different build modes: 'main', 'adult', and 'dev'.
 * It uses Vite with Rollup plugins to bundle the TypeScript source code, handle external dependencies,
 * generate userscript metadata, and format the final output.
 */

import * as fs from 'node:fs';
import externalGlobals from 'rollup-plugin-external-globals';
import userscript, { type Metadata } from 'userscript-metadata-generator';
import { defineConfig } from 'vite';
import viteBanner from 'vite-plugin-banner';
import { viteSingleFile } from 'vite-plugin-singlefile';
import svgLoader from 'vite-svg-loader';
import metaAdult from './src/meta/meta-adult';
import metaDev from './src/meta/meta-dev';
import metaMain from './src/meta/meta-main';
import { bookmarklet, comicSites, hentaiSites, mangaSites } from './src/meta/readme';

const didChange = (filePath: string, content: string) =>
  !fs.existsSync(filePath) ||
  fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n') !== content.replace(/\r\n/g, '\n');

/**
 * The main Vite configuration function.
 * It determines the build target based on the Vite mode (`main`, `adult`, or `dev`)
 * and returns the appropriate configuration for that target.
 */
export default defineConfig(({ mode }) => {
  if (mode === 'standalone') {
    return {
      plugins: [
        svgLoader({ svgo: false, defaultImport: 'raw' }),
        viteSingleFile({ useRecommendedBuildConfig: true }),
        {
          name: 'rename-index',
          closeBundle() {
            fs.renameSync('./dist/index.html', './dist/Manga_Local_Viewer.html');
          },
        },
      ],
      build: {
        target: 'esnext',
        emptyOutDir: false,
        outDir: 'dist',
        rollupOptions: {
          input: 'index.html',
        },
      },
    };
  }

  if (mode === 'development') mode = 'dev';
  const meta = {
    main: metaMain,
    adult: metaAdult,
    dev: metaDev,
  }[mode];

  if (mode === 'main') {
    /**
     * Generates the main README.md file by replacing placeholders in a template file
     * with dynamically generated content, such as the list of supported sites.
     */
    const readme = fs
      .readFileSync('./src/meta/readme.md', 'utf8')
      .replace('<!-- @echo LIST_MANGA_SITES -->', mangaSites)
      .replace('<!-- @echo LIST_COMIC_SITES -->', comicSites)
      .replace('<!-- @echo LIST_HENTAI_SITES -->', hentaiSites)
      .replaceAll('<!-- @echo BOOKMARKLET -->', bookmarklet);
    const readmePath = './readme.md';
    if (didChange(readmePath, readme)) {
      fs.writeFileSync(readmePath, readme, 'utf8');
    }
  }

  /**
   * Generates and writes the .meta.js file for a given script.
   */
  const banner = userscript(meta as Metadata);
  const metaPath = `./dist/${meta?.name?.replace(/ /g, '_')}.meta.js`;
  if (didChange(metaPath, banner)) {
    fs.writeFileSync(metaPath, banner, 'utf8');
  }

  return {
    plugins: [
      viteBanner({ content: banner, verify: false }),
      svgLoader({ svgo: false, defaultImport: 'raw' }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      emptyOutDir: false,
      outDir: 'dist',
      rollupOptions: {
        input: `src/userscript-${mode}.ts`,
        plugins: [
          externalGlobals({
            'blob-util': 'blobUtil',
            'hotkeys-js': 'hotkeys',
            jszip: 'JSZip',
            lodash: '_',
            nprogress: 'NProgress',
            'colorjs.io': 'Color',
            bowser: 'bowser',
            'file-saver': 'window',
          }),
        ],
        output: {
          format: 'iife',
          entryFileNames: `${meta?.name?.replace(/ /g, '_')}.user.js`,
          sourcemap: false,
        },
      },
    },
  };
});
