import type { UserConfig, UserConfigExport, ConfigEnv } from 'vite';

import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log('command:', command);

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const isBuild = command === 'build';

  return {
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assetsCDN',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: isBuild,
        },
      },
      brotliSize: !isBuild,
      chunkSizeWarningLimit: 2000,
    },

    resolve: {
      alias: [
        {
          // @/xxxx => src/xxxx
          find: /\@\//,
          replacement: `${pathResolve('src')}/`,
        },
        {
          // types/xxxx => types/xxxx
          find: /\/types\//,
          replacement: `${pathResolve('types')}/`,
        },
      ],
    },
    // resolve: {
    //   alias: {
    //     '@': pathResolve('./src'),
    //     'types': pathResolve('./types'),
    //   },
    // },
    plugins: [vue(), vueJsx(), viteCompression(), WindiCSS()],
  };
};
