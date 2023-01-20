import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

createServer(page =>
    createInertiaApp({
        id: 'mw-ui',
        page,
        render: ReactDOMServer.renderToString,
        resolve: name => {
            const pages = import.meta.glob('./pages/**/index.jsx', { eager: true })
            return pages[`./pages/${name}/index.jsx`]
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
)
