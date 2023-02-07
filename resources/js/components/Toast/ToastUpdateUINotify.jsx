import {motion} from 'framer-motion'
import {cva} from 'class-variance-authority'
import {ENUM_TYPE_TOAST} from "@utils/toast/reducer";
import {InformationCircleIcon, XCircleIcon, CheckCircleIcon} from '@heroicons/react/20/solid'

const icon = cva(
    ['h-6 w-6'],
    {
        variants: {
            color: {
                MW_UPDATER_START: [
                    'text-blue-500'
                ],
                MW_UPDATER_WAITING: [
                    'text-slate-400'
                ],
                MW_UPDATER_SUCCESS: [
                    'text-green-500'
                ],
                MW_UPDATER_FAILED: [
                    'text-red-500'
                ]
            }
        }
    }
);

const LoadingIcon = (props) => {
    return <svg {...props} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
}

const renderIcon = (type) => {
    switch (type)
    {
        case ENUM_TYPE_TOAST.MW_UPDATER_START:
            return <InformationCircleIcon className={icon({color: type})} />;
            break
        case ENUM_TYPE_TOAST.MW_UPDATER_WAITING:
            return <LoadingIcon className={icon({color: type})} />;
            break
        case ENUM_TYPE_TOAST.MW_UPDATER_SUCCESS:
            return <CheckCircleIcon className={icon({color: type})} />;
            break
        case ENUM_TYPE_TOAST.MW_UPDATER_FAILED:
            return <XCircleIcon className={icon({color: type})} />;
            break
    }
}
export default function ToastUpdateUINotify({id, type, title, message = ''})
{

    return <>
        <motion.div key={id} transition={{type: 'spring', duration: 0.5}} initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}}  className={"pointer-events-auto w-full max-w-sm overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"}>
            <div className={'p-4'}>
                <div className={'flex items-start'}>
                    <div className={'flex-shrink-0'}>
                        {renderIcon(type)}
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">{title}</p>
                        <p className="mt-1 text-sm text-gray-500">{message}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}
