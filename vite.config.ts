import type { UserConfig, UserConfigExport, ConfigEnv } from 'vite';

import vueJsx from '@vitejs/plugin-vue-jsx';

import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';

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
      alias: {
        '@': pathResolve('./src'),
      },
    },
    plugins: [vue(), vueJsx(), viteCompression()],
  };
};
