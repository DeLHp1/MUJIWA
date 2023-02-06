import {v4 as uuidV4} from "uuid";

export default function InputField({label = '', name = '', type = 'text', value = '', handler = Function}){
    const uniqueID = `InputField-${uuidV4()}`;

    return <div id={uniqueID} className={'rounded-md border border-slate-300 px-3 py-2 shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand'}>
        <label htmlFor={uniqueID} className={'block select-none text-xs font-medium text-slate-900'}>{label}</label>
        <input id={uniqueID} name={name} type={type} onChange={handler} value={value === null ? '' : value} className={'block w-full border-0 p-0 text-slate-700 placeholder-slate-500 outline-none focus:outline-0 focus:ring-0 sm:text-sm'} />
    </div>
}
