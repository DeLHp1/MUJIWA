import {createPortal} from "react-dom";
import {useToast} from '@context/ToastNotificationProvider'
import {ENUM_TYPE_TOAST} from "@utils/toast/reducer";
import ToastUpdateUINotify from "@components/Toast/ToastUpdateUINotify";
import {AnimatePresence} from "framer-motion";

export default function ToastContainer()
{

    let {toast} = useToast();


    return RenderToPortal(
        <>
            {
                toast.length > 0 ? (
                    <div
                        aria-live={'assertive'}
                        className={'fixed pointer-events-none inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'}
                    >
                        <div className={'flex w-full flex-col items-center space-y-4 sm:items-end'}>
                            <AnimatePresence mode={'wait'}>
                                {toast.map(e => {
                                    switch (e.type)
                                    {
                                        case ENUM_TYPE_TOAST.MW_UPDATER_START:
                                            return <ToastUpdateUINotify key={e.id} id={e.id} type={e.type} title={e.title} message={e.message} />;
                                            break
                                        case ENUM_TYPE_TOAST.MW_UPDATER_WAITING:
                                            return <ToastUpdateUINotify key={e.id} id={e.id} type={e.type} title={'Čekáme na odpověď serveru'} message={'Aktuálně probíhá aktualizace MW UI, prosíme aby jste průběhu aktualizace nic na stránce nedělali, děkujeme.'} />;
                                            break
                                        case ENUM_TYPE_TOAST.MW_UPDATER_SUCCESS:
                                            return <ToastUpdateUINotify key={e.id} id={e.id} type={e.type} title={e.title} message={e.message} />;
                                            break
                                        case ENUM_TYPE_TOAST.MW_UPDATER_FAILED:
                                            return <ToastUpdateUINotify key={e.id} id={e.id} type={e.type} title={e.title} message={e.message} />;
                                            break
                                        default:
                                            return null
                                    }
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

function RenderToPortal(tree){
    return createPortal(tree, document.getElementById('mw-portals'), 'mw-portal');
}
