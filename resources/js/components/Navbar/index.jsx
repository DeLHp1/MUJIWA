import styles from '@components/Navbar/navbar.module.css'
import {cva} from 'class-variance-authority'
import {Link} from '@inertiajs/react'
import {motion} from 'framer-motion'
import Logo from "@components/Logo"
import {BellIcon} from "@heroicons/react/24/outline";


const NavLink = ({href = '#', as = 'a', active = false, children}) => {
    let link = cva(
        ['relative', 'px-2', 'py-1.5', 'rounded', 'transition-colors', 'focus:outline-none', 'focus-within:ring-1', 'focus-within:ring-offset-2', 'font-medium'],
        {
            variants: {
                colors: {
                    active: [
                        'text-brand',
                        'hover:text-blue-700',
                        'focus-within:ring-blue-400',
                        'focus-within:ring-offset-slate-100',
                    ],
                    normal: [
                        'text-slate-500',
                        'hover:text-slate-700',
                        'hover:bg-slate-200',
                        'focus-within:ring-slate-400',
                        'focus-within:ring-offset-slate-100',
                        'focus-within:bg-slate-200'
                    ]
                }
            },
            defaultVariants: {
                colors: 'normal'
            }
        }
    )



   return <Link href={href} as={as} className={link({colors: active ? 'active' : 'normal'})}>
        {active && <motion.div className={'absolute -z-10 inset-0 h-full w-full rounded bg-blue-100'} transition={{type: 'tween', ease: 'backInOut'}} layoutId={'navLink'} />}
        {children}
    </Link>
}
export default function Navbar()
{
    return <div className={'z-50 relative'}>
        <div className={'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'}>
            <div className={'flex h-16'}>
                <div className={'flex flex-shrink-0 items-center'}>
                    <Logo className={'min-h-full w-16'} />
                </div>
                <div className={'hidden sm:flex sm:flex-1 sm:ml-6 sm:items-center sm:justify-start sm:space-x-2'}>
                </div>
                <div className={'flex flex-1 justify-end sm:flex-none sm:flex-shrink-0 ml-6 items-center space-x-2'}>
                    <Link href={'#'} as={'button'} className={'rounded-full p-1 text-slate-400 focus-within:text-brand hover:text-brand focus:outline-none focus-within:ring-2 focus-within:ring-offset-2, focus-within:ring-brand, focus-within:ring-offset-slate-100 transition-colors'}>
                        <BellIcon className={'h-6 w-6'} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

