import {useEcho} from "@context/LaravelEchoProvider";
import {useToastDispatch} from "@context/ToastNotificationProvider";
import {ENUM_ACTION, ENUM_TYPE_TOAST} from "@utils/toast/reducer";
import {useEffect, useCallback} from "react";
import {router} from "@inertiajs/react";


export default function AutomaticUpdateUIService({children})
{
    const Echo = useEcho();
    const Toast = useToastDispatch();

    const AttachListener = useCallback(() => {
        const sendStartNotification = (data) => {
            Toast({type: ENUM_ACTION.ADD_UPDATE_UI_START, title: data.title, message: data.message})
            Toast({type: ENUM_ACTION.ADD_UPDATE_UI_WAITING})
        };

        const sendFinishNotification = (data) => {
            Toast({type: ENUM_ACTION.REMOVE_TOAST, toastType: ENUM_TYPE_TOAST.MW_UPDATER_START})
            Toast({type: ENUM_ACTION.REMOVE_TOAST, toastType: ENUM_TYPE_TOAST.MW_UPDATER_WAITING})

            Toast({type: ENUM_ACTION.ADD_UPDATE_UI_SUCCESS, title: data.title, message: data.message})
            setTimeout(() => {
                Toast({type: ENUM_ACTION.REMOVE_TOAST, toastType: ENUM_TYPE_TOAST.MW_UPDATER_SUCCESS})
                router.reload({preserveScroll: true, preserveState: true})
            }, 5000)
        }

        Echo.channel('mw-ui-updater')
            .listen('.mw-ui-updater.start', (data) => {;
                sendStartNotification(data);
            })
            .listen('.mw-ui-updater.finish', (data) => {
                sendFinishNotification(data);
            });
    }, [Echo, Toast]);

    const DettachListener = useCallback(() => {
        Echo.leave('mw-ui-updater');
    }, [Echo, Toast])

    useEffect(() => {
        AttachListener();
        return () => DettachListener();
    })

    return <>
        {children}
    </>
}
