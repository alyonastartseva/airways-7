import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import compression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = env.VITE_API_URL || 'http://localhost:3000/api';

  let target = 'http://localhost:3000';
  try {
    const u = new URL(API_URL);
    target = u.origin;
  } catch {
    target = 'http://localhost:3000';
  }

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      compression({ algorithm: 'gzip', ext: '.gz' }),
      visualizer(),
    ],
    server: {
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
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
        scss: { additionalData: `@use "@shared/styles/index.scss" as *;` },
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true, drop_debugger: true, pure_funcs: ['console.info'] },
        format: { comments: false },
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
    optimizeDeps: { include: ['react', 'react-dom'] },
  };
});
