import '@/css/tailwind.css'
import { createApp, DefineComponent, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { trail } from 'momentum-trail'
import routes from '@/scripts/routes/routes.json'
import { modal } from 'momentum-modal'
import { createPinia } from 'pinia'
import { notification } from '@/scripts/plugins/NotificationPlugin'

createInertiaApp({
    id: 'mw-ui-v3',
    title: (name: string) => `PROJECT MUJIWA | ${name}`,
    resolve: (name: string) =>
        resolvePageComponent<DefineComponent>(
            `../views/pages/${name}.vue`,
            import.meta.glob('../views/pages/**/*.vue') as DefineComponent
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(createPinia())
            .use(trail, { routes })
            .use(modal, {
                resolve: (name: string) =>
                    resolvePageComponent<DefineComponent>(
                        `../views/pages/${name}.vue`,
                        import.meta.glob('../views/pages/**/*.vue') as DefineComponent
                    ),
            })
            .use(notification)
            .use(plugin)
            .mount(el)
    },
})
