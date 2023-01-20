import "virtual:fonts.css"
import '@assets/tailwind.css'
import { createInertiaApp } from '@inertiajs/react'
import {hydrateRoot} from 'react-dom/client'


createInertiaApp({
    id: 'mw-ui',
    title: title => title ? `MUJIWA | ${title}` : `MUJIWA`,
    progress: {includeCSS: false},
    resolve: name => {
        const pages = import.meta.glob('./pages/**/index.jsx', {eager: true});
        return pages[`./pages/${name}/index.jsx`]
    },
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />);
    },
})
