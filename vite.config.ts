// vite.config.ts
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import compression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Можно задать, напр.:
  // VITE_API_URL=http://localhost:8080/api
  // VITE_AUTH_URL=http://92.118.114.29:8180
  const API_URL = env.VITE_API_URL || 'http://localhost:8080/api';
  const AUTH_URL = env.VITE_AUTH_URL || 'http://92.118.114.29:8180';

  // Разбираем URL, чтобы корректно проксировать с переписыванием префикса
  const apiUrl = new URL(API_URL);
  const apiOrigin = apiUrl.origin; // http://localhost:8080
  const apiBasePath = apiUrl.pathname.replace(/\/$/, '') || '/api'; // /api (или то, что задано)

  const authUrl = new URL(AUTH_URL);
  const authOrigin = authUrl.origin; // http://92.118.114.29:8180
  const authBasePath = authUrl.pathname.replace(/\/$/, ''); // обычно пусто

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      compression({ algorithm: 'gzip', ext: '.gz' }),
      visualizer({ filename: 'dist/stats.html', gzipSize: true, brotliSize: true, open: false }),
    ],

    server: {
      proxy: {
        // Все запросы к /api → на API_URL (с учётом его базового пути)
        '/api': {
          target: apiOrigin,
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(/^\/api/, apiBasePath), // если apiBasePath = /api — переписывание "всамого себя"
        },

        // Авторизация: /auth → AUTH_URL (обычно без префикса)
        '/auth': {
          target: authOrigin,
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(/^\/auth/, authBasePath), // если нужно, можно оставить как есть
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
