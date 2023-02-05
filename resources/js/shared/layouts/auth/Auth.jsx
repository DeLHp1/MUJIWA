import styles from '@shared/layouts/auth/auth.module.css'
import {AnimatePresence} from "framer-motion";
import {router} from '@inertiajs/react'
import {useEffect, useState, useMemo} from "react";

const AuthLayout= ({children}) => {

    const [transitionState, setTransitionState] = useState(false);

    const transitionClasses = useMemo(
        () => transitionState ? 'overflow-hidden' : '',
        [transitionState]
    )

    const removeListenerStart = router.on('start', () => setTransitionState(true));


    const removeListeners = () => {
        removeListenerStart();
    }

    useEffect(() => {
        return () => removeListeners();
    }, [])


    return <main className={`${styles.page} ${transitionClasses}`}>
        <Header />
        <AnimatePresence mode={'wait'} onExitComplete={() => setTransitionState(false)}>
            {children}
        </AnimatePresence>
    </main>
}

const Header = () => {
    return <div className={styles.header}>
        <div className={styles.headerLogo}>
            <svg viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M81.0009 1.05078L71.2067 30.4101H63.485L57.3814 16.2285L51.3913 30.4101H43.6696L33.7051 1.05078H43.1018L48.2685 17.9848L55.8484 1.20806H58.886L66.6077 17.9848L71.6609 1.05078H81.0009Z" className={'fill-brand stroke-brand'} strokeWidth="1.60313" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M34.2433 30.3593L31.7735 13.4515L23.342 30.4118H20.7586L12.3271 13.4515L9.8857 30.3593H1L5.79771 1H14.5415L22.0361 16.9641L29.5876 1H38.3313L43.1006 30.3593H34.2433Z" className={'fill-slate-900 stroke-slate-900 dark:fill-white dark:stroke-white transition-colors'} strokeWidth="1.60313" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
}

export default AuthLayout;
