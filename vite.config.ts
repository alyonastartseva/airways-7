import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const styleIndexPath = path.resolve(__dirname, 'src/shared/styles/index.scss').replace(/\\/g, '/');

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    visualizer({
      open: process.env.NODE_ENV === 'development',
      gzipSize: true,
    }),
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: ['log', 'info'],
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['antd'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
