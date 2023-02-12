import {Fragment, useEffect, useState} from "react";
import {Transition, Dialog} from "@headlessui/react";
import {AnimatePresence, motion} from "framer-motion";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";

export default function MobileNavbar()
{
    const [open, setOpen] = useState(false);

    return (
       <>
           <MenuButton state={open} setState={setOpen} />
           <Panel open={open} setOpen={setOpen}>
               <div className={'flex items-start justify-between'}>
                   <Dialog.Title className="text-lg font-medium text-slate-900">Menu</Dialog.Title>
                   <div className={'ml-3 flex h-7 items-center'}>
                       <button
                       type={"button"}
                       className="rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                       onClick={() => setOpen(false)}
                       >
                           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                       </button>
                   </div>
               </div>
           </Panel>
       </>
    )
}

const MenuButton = ({state, setState}) => {

    const threshold = 50;
    const [direction, setDirection] = useState('up')

    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        const scrolledMoreThanThreshold = (currentScrollYPosition) =>
            Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

        const isScrollingUp = (currentScrollYPosition) =>
            currentScrollYPosition > previousScrollYPosition &&
            !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
            !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingUp(currentScrollYPosition)
                    ? 'down'
                    : 'up';
                setDirection(newScrollDirection);
                previousScrollYPosition =
                    currentScrollYPosition > 0 ? currentScrollYPosition : 0;
            }
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <AnimatePresence mode={'wait'}>
                {(!state && direction === 'up') && <motion.button initial={false} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}} transition={{type: 'spring'}} onClick={() => setState(true)} className={'block sm:hidden bg-white cursor-pointer z-50 rounded-xl shadow p-2 fixed bottom-4 right-4'}>
                    <Bars3Icon onClick={() => setState(true)} className={'h-8 w-8 text-slate-900'} />
                </motion.button> }
            </AnimatePresence>
        </>
    )
}
const Panel = ({open, setOpen, children}) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog onClose={setOpen} as={'div'} className={'relative z-[9999]'}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={'fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity'} />
                </Transition.Child>

                <div className={'fixed inset-0 overflow-hidden'}>
                    <div className={'absolute inset-0 overflow-hidden'}>
                        <div className={'pointer-events-none fixed bottom-0 flex max-w-full'}>
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >
                                <Dialog.Panel className={'pointer-events-auto w-screen max-h-[50vh]  rounded-tr-xl rounded-tl-xl overflow-hidden'}>
                                    <div className={'flex flex-col overflow-y-scroll bg-white py-6 shadow-xl h-full'}>
                                        <div className="px-4 sm:px-6">
                                            {children}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
