import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

const styleIndexPath = path
  .resolve(__dirname, 'src/shared/styles/index.scss')
  .replace(/\\/g, '/');

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@processes': path.resolve(__dirname, 'src/processes'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@shared/styles': path.resolve(__dirname, 'src/shared/styles'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${styleIndexPath}" as *;`,
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.info'],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
