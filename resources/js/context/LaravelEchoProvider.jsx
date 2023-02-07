import {createContext, useContext} from 'react'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'


export const LaravelEchoContext = createContext(null);

export function useEcho(){
    let context = useContext(LaravelEchoContext)

    if(!context) throw Error();

    return context;
}
export default function LaravelEchoProvider({children})
{
    const options = {
        broadcaster: 'pusher',
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        wsHost: import.meta.env.VITE_PUSHER_HOST,
        wsPort: import.meta.env.VITE_PUSHER_PORT,
        wssPort: import.meta.env.VITE_PUSHER_PORT,
        forceTLS: true,
        encrypted: true,
        cluster: '',
        enabledTransports: ['ws','wss']
    }

    const LaravelEcho = new Echo({
        ...options,
        client: new Pusher(options.key, options)
    })

    return <LaravelEchoContext.Provider value={LaravelEcho}>{children}</LaravelEchoContext.Provider>
}

LaravelEchoContext.displayName = 'LaravelEchoContext'
