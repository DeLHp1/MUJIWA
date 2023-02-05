import {isEmpty} from "lodash";
import {XCircleIcon} from "@heroicons/react/20/solid";

export default function ErrorMessage({errors}){

    const ListOfError = Object.entries(errors)
        .map(([key, value]) => (<li key={key}>{value}</li>))

    return !isEmpty(errors) ? <div className={'rounded-md bg-red-50 p-4 mb-4'}>
        <div className={'flex'}>
            <div className={'flex-shrink-0'}>
                <XCircleIcon className={'h-5 w-5 text-red-400'} aria-hidden={'true'} />
            </div>
            <div className={'ml-3'}>
                <h3 className={'text-sm font-medium text-red-800'}>Nastala chyba při validaci</h3>
                <div className={'mt-2 text-sm text-red-700'}>
                    <ul role={'list'} className={'list-disc space-y-1 pl-3'}>
                        {ListOfError}
                    </ul>
                </div>
            </div>
        </div>
    </div> : null
}
