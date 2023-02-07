import {ToastContainer} from "@components/Toast";

export default function ToastLayout({children})
{
    return <>
        <ToastContainer />
        {children}
    </>
}
