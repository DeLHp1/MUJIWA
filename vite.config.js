import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import manifestSRI from 'vite-plugin-manifest-sri';
import fonts from 'vite-plugin-fonts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/main.jsx',
            refresh: true,
        }),
        react(),
        manifestSRI({algorithms: ['sha512']}),
        fonts({
            custom: {
                families: [{
                    name: 'Inter',
                    local: 'Inter',
                    src: 'resources/fonts/inter/*.woff2'
                }],
                display: 'swap',
                preload: true,
                injectTo: 'head'
            }
        })
    ],
    ssr: {
        noExternal: ['react-icons', '@heroicons/react', 'lodash']
    },
    css: {
      modules: {
          generateScopedName: 'mw-[local]-[contenthash]'
      }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources', 'js'),
            '@components': resolve(__dirname, 'resources', 'js', 'components'),
            '@hooks': resolve(__dirname, 'resources', 'js', 'hooks'),
            '@utils': resolve(__dirname, 'resources', 'js', 'utils'),
            '@pages': resolve(__dirname, 'resources', 'js', 'pages'),
            '@shared': resolve(__dirname, 'resources', 'js', 'shared'),
            '@assets': resolve(__dirname, 'resources', 'js', 'assets')
        }
    }
});
