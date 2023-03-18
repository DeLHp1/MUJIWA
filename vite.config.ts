import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from "vite-plugin-eslint";
import {resolve} from 'path';
import { watch } from "vite-plugin-watch";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        Components({
           dirs: ['resources/views/components'],
            dts: 'resources/scripts/types/components.d.ts',
            resolvers: [
                (name: string) => {
                    const components = ['Link', 'Head']

                    if(components.includes(name))
                    {
                        return { name, from: "@inertiajs/vue3"}
                    }
                }
            ]
        }),
        AutoImport({
            vueTemplate: true,
            dts: 'resources/scripts/types/auto-imports.d.ts',
            imports: [
                'vue',
                { 'momentum-trail': ['route', 'current'] },
                { '@inertiajs/vue3': ['router', 'useForm', 'usePage'] }
            ]
        }),
        eslintPlugin(),
        laravel({
            input: 'resources/scripts/app.ts',
            refresh: true
        }),
        vue({
           template: {
               transformAssetUrls: {
                   base: null,
                   includeAbsolute: false
               }
           }
        }),
        watch({
            pattern: 'app/{Data,Enums}/**/*.php',
            command: 'php artisan typescript:transform'
        }),
        watch({
            pattern: 'routes/*.php',
            command: 'php artisan trail:generate'
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'resources')
        }
    }
});
