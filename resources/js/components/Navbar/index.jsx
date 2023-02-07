import Logo from "@components/Logo";
import {Link, usePage} from "@inertiajs/react";
import {cva} from 'class-variance-authority'
import {motion} from 'framer-motion'
import useRoute from "@hooks/useRoute";
import {BellIcon} from "@heroicons/react/24/outline";

const NavLink = ({href, as, active = false, children}) => {
    let link = cva(
        ['relative px-2.5 py-1.5 rounded-md transition-colors focus:outline-none active:outline-none focus-within:ring-1 focus:within:ring-offset-1'],
        {
            variants: {
                color: {
                    active: [
                        'text-blue-500',
                        'focus-within:ring-brand',
                        'focus-within:ring-offset-slate-100'
                    ],
                    normal: [
                        'text-slate-500',
                        'hover:bg-slate-200',
                        'hover:text-blue-500',
                        'focus-within:ring-slate-600',
                        'focus-within:ring-offset-slate-100'
                    ]
                },
            },
            defaultVariants: {
                color: 'normal'
            }
        })

    return <Link href={href} as={as} className={link({color: active ? 'active' : 'normal'})}>
        {active && <motion.div transition={{type: 'tween', ease: "backInOut"}} className={'absolute -z-10 inset-0 bg-blue-100 rounded-md w-full h-full transition-colors'} layoutId={'navlink'} />}
        <span>{children}</span>
    </Link>
}
export default function Navbar()
{

    return <div className={'sticky top-0 z-50 bg-slate-100/25 backdrop-blur-xl py-4 text-sm font-medium'}>
        <div className={'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'}>
            <div className={'flex flex-1 items-center justify-between h-8'}>
                <div className={'flex items-center'}>
                    <div className={'flex-shrink-0'}>
                        <Logo className={'h-full w-16'}/>
                    </div>
                    <div className={'hidden sm:flex sm:space-x-1 sm:ml-2'}>
                        <NavLink href={'#'} active={true} as={'a'}>Rozcestník</NavLink>
                        <NavLink href={'#'} active={false} as={'a'}>Fansubs</NavLink>
                    </div>
                </div>
                <div className={'flex items-center'}>
                    <Link href={'#'} as={'button'} className={''}>
                        <BellIcon className={'h-6 w-6'} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

