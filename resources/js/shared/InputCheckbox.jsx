import {Switch} from "@headlessui/react";

export default function InputCheckbox({checked = false, setChecked, inputCheck = '', srOnly = ''}) {
    return <Switch
        checked={checked}
        onChange={bool => setChecked(inputCheck, bool)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-brand ui-not-checked:bg-slate-900 focus:outline-none focus-within:ring-1 ui-checked:focus-within:ring-brand ui-not-checked:focus-within:ring-slate-900 focus-within:ring-offset-1 focus-within:ring-offset-white transition`}
    >
        <span className={'sr-only'}>{srOnly}</span>
        <span className={'inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1'}></span>
    </Switch>
}
