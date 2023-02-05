import Auth from "@shared/layouts/auth/Auth";
import Balancer from "react-wrap-balancer";
import {isEmpty} from "lodash";
import {XCircleIcon} from "@heroicons/react/20/solid";
import {v4 as uuidV4} from "uuid";
import {motion} from "framer-motion";
import useRoute from "@hooks/useRoute";
import {Link, useForm} from "@inertiajs/react";
import {Turnstile} from "@marsidev/react-turnstile";
import {useRef} from "react";

const RegisterPage = () => {
    return <>
        <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 50}} transition={{type: 'spring'}}>
        <div className={'max-w-lg w-full mx-auto mt-6'}>
            <h6 className={'block text-center text-xl sm:text-3xl font-bold tracking-tight text-slate-900'}>
                <Balancer>Vytvořte si svůj účet MW</Balancer>
            </h6>
        </div>
        <div className={'shadow-md rounded-md overflow-hidden grid grid-cols-1 mt-8 mx-auto max-w-lg w-full'}>
            <Form />
        </div>
            <span className={'mt-2 mx-auto block max-w-lg w-full text-center text-sm font-medium text-slate-400'}>Formulář je chráněn Turnstile od společnosti Cloudflare</span>
        </motion.div>
    </>
}

const Form = () => {

    const route = useRoute()

    const ref = useRef(null);

    const form = useForm({'username': '', 'email': '', 'password': '', 'password_confirmation': '', 'cf-turnstile-response': ''})

    const inputHandle = el => {
        const {name, value} = el.target;
        form.setData(name, value);
    }

    const formSubmit = e => {
        e.preventDefault();
        form.post(route('register'), {onError: () => ref.current.reset()})
    }

    return <div className={'bg-white px-6 py-8'}>
        <ErrorMessage errors={form.errors} />
        <form onSubmit={formSubmit} className={'space-y-4'}>
            <InputField
                label={'Uživatelské jméno'}
                name={'username'}
                handler={inputHandle}
                type={'text'}
                value={form.data.username}
            />
            <InputField
                label={'Email'}
                name={'email'}
                handler={inputHandle}
                type={'email'}
                value={form.data.email}
            />
            <InputField
                label={'Heslo'}
                name={'password'}
                handler={inputHandle}
                type={'password'}
                value={form.data.password}
            />
            <InputField
                label={'Heslo (Ověření)'}
                name={'password_confirmation'}
                handler={inputHandle}
                type={'password'}
                value={form.data.password_confirmation}
            />
            <Turnstile ref={ref} onSuccess={token => form.setData('cf-turnstile-response', token)} siteKey={import.meta.env.VITE_TURNSTILE_TOKEN_SITE} options={{ size: 'invisible'}} />
            <InputButton type={'submit'} loading={form.processing} className={`text-slate-50 ${form.processing ? 'bg-slate-900 hover:bg-slate-800 focus:bg-slate-800' : 'bg-brand hover:bg-blue-600 focus:bg-blue-600'} focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 ${form.processing ? 'focus-within:ring-slate-900 focus-within:ring-offset-white' : 'focus-within:ring-brand focus-within:ring-offset-white'} transition`}>Zaregistrovat se</InputButton>
            <div className={'flex items-center justify-center gap-2'}>
                <span className={'block text-slate-900 font-medium text-sm'}>Už máte u nás účet?</span>
                <Link href={route('login')} className={'text-sm text-brand underline hover:text-blue-600 focus:outline-none focus-within:ring-1 focus-within:ring-brand focus-within:rounded focus-within:ring-offset-2 focus-within:ring-offset-white'}>Přihlásit se</Link>
            </div>
        </form>
    </div>
}

const InputField = ({label = '', name = '', type = 'text', value = '', handler = Function}) => {

    const uniqueID = `InputField-${uuidV4()}`;

    return <div id={uniqueID} className={'rounded-md border border-slate-300 px-3 py-2 shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand'}>
        <label htmlFor={uniqueID} className={'block select-none text-xs font-medium text-slate-900'}>{label}</label>
        <input id={uniqueID} name={name} type={type} value={value} onChange={handler} className={'block w-full border-0 p-0 text-slate-700 placeholder-slate-500 outline-none focus:outline-0 focus:ring-0 sm:text-sm'} />
    </div>
}

const InputButton = ({type = 'submit', children, loading = false, className = ''}) => {
    return <button type={type} className={`relative flex items-center justify-center w-full px-4 py-3 rounded-md shadow ${className}`}>
        {loading ? <svg className={'absolute left-1/2 -translate-x-1/2 inset-x-0 transition-all ease-in-out'} width="24" height="24" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" strokeLinecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"/></g></svg> : null }
        <span className={`text-sm font-medium ${loading ? 'invisible' : null}`}>{children}</span>
    </button>
}

const ErrorMessage = ({errors}) => {

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

RegisterPage.layout = page => <Auth>{page}</Auth>

export default RegisterPage;
