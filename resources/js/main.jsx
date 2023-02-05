import "virtual:fonts.css"
import '@assets/tailwind.css'
import { createInertiaApp } from '@inertiajs/react'
import {createRoot, hydrateRoot} from 'react-dom/client'
import {Provider} from "react-wrap-balancer";


createInertiaApp({
    id: 'mw-ui',
    title: title => title ? `MUJIWA | ${title}` : `MUJIWA`,
    progress: {includeCSS: false},
    resolve: name => {
        const pages = import.meta.glob('./pages/**/index.jsx');
        return pages[`./pages/${name}/index.jsx`]()
    },
    setup({ el, App, props }) {
        createRoot(el).render(<Provider><App {...props} /></Provider>);
    },
})
