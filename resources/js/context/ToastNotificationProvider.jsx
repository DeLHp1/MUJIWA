import {useContext, createContext, useReducer} from 'react'
import ToastReducer, {initialValues} from '@utils/toast/reducer'

export const ToastNotificationContext = createContext(null);
export const ToastNotificationDispatchContext = createContext(null);

export function useToast()
{
    let context = useContext(ToastNotificationContext);

    if(!context) throw Error();

    return context;
}

export function useToastDispatch()
{
    let context = useContext(ToastNotificationDispatchContext);

    if(!context) throw Error();

    return context;
}

export default function ToastNotificationProvider({children})
{
    const [toast, dispatch] = useReducer(ToastReducer, initialValues);

    return <ToastNotificationContext.Provider value={toast}>
        <ToastNotificationDispatchContext.Provider value={dispatch}>
            {children}
        </ToastNotificationDispatchContext.Provider>
    </ToastNotificationContext.Provider>
}

ToastNotificationContext.displayName = 'ToastNotificationContext'
ToastNotificationDispatchContext.displayName = 'ToastNotificationDispatchContext'
