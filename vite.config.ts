/* eslint-disable import/no-extraneous-dependencies,no-console,@typescript-eslint/no-unused-vars */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import monkeyPlugin from 'vite-plugin-monkey';
// @ts-ignore
import metaMain from './src/meta/meta-main';
// @ts-ignore
import metaAdult from './src/meta/meta-adult';
// @ts-ignore
import metaDev from './src/meta/meta-dev';

const scripts: any = {
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

const scriptTarget = process.env.ENTRY || 'dev';
console.log(`Building ${scriptTarget.toUpperCase()} script`);
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   // react(),
  //   // https://github.com/lisonge/vite-plugin-monkey.git
  //   monkeyPlugin({
  //     entry: `src/${scripts[scriptTarget].entry}`,
  //     // @ts-ignore
  //     userscript: scripts[scriptTarget].banner,
  //     build: {
  //       fileName: scripts[scriptTarget].name,
  //     },
  //   }),
  // ],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src'),
  //   },
  // },
  build: {
    minify: 'terser',
    emptyOutDir: false,
    terserOptions: { compress: { keep_fnames: true } },
  },
  // build: {
  // lib: {
  //   entry: `src/${scripts.main.entry}`,
  //   name: 'my-awesome-userscript',
  // },
  // rollupOptions: {
  // input: resolve(__dirname, 'src/userscript-main.ts'),
  //   output: {
  //     format: 'iife',
  //     entryFileNames: `dist/${scripts.main.name}`,
  //   },
  // },
  // },
});
