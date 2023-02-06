import {useEffect, useRef} from "react";

export default function useTurnslite(){

    const elem = useRef(null)

    const tokenRef = useRef(null)
    const renderTurnstile = () => {
        window.turnstile.render(elem.current, {
            sitekey: import.meta.env.VITE_TURNSTILE_TOKEN_SITE,
            callback: token => tokenRef.current = token
        })
    }

    const removeTurnstile = () => {
        window.turnstile.remove(elem.current)
    }

    const resetTurnstile = () => {
        window.turnstile.reset(elem.current)
    }

    useEffect(() =>{
        renderTurnstile()
        return () => removeTurnstile()
    }, [])

    return {ref: elem, token: tokenRef.current, resetTurnstile: resetTurnstile};
}
