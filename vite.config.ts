import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const styleIndexPath = path
  .resolve(__dirname, 'src/shared/styles/index.scss')
  .replace(/\\/g, '/');

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${styleIndexPath}" as *;`,
      },
    },
  },
});
