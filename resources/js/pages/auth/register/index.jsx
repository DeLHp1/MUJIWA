import Auth from "@shared/layouts/auth/Auth";
import Balancer from "react-wrap-balancer";
import {motion} from "framer-motion";
import useRoute from "@hooks/useRoute";
import {Link, useForm, router} from "@inertiajs/react";
import InputField from "@shared/InputField";
import InputButton from "@shared/InputButton";
import ErrorMessage from "@shared/ErrorMessage";
import useTurnstile from "@hooks/useTurnstile";
import {useCallback, useState} from "react";
import ProviderLayout from "@shared/layouts/provider/ProviderLayout";

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

    const {ref, token, resetTurnstile} = useTurnstile()

    const [loading, setLoading] = useState(false);

    const {data, setData, errors, setError, clearErrors} = useForm({'username': null, 'email': null, 'password': null, 'password_confirmation': null})

    const inputHandle = el => {
        const {name, value} = el.target;
        setData(name, value);
    }
    const formSubmit = useCallback((e) => {
        e.preventDefault();
        setLoading(true);

        router.post(
            route('register'),
            {...data, turnstile: token},
            {
                preserveState: true,
                onSuccess:() => {clearErrors(); setLoading(false)},
                onError: (error) => {resetTurnstile(); clearErrors(); setError(error); setLoading(false)}})
    }, [token, data]);

    return <><div className={'bg-white px-6 py-8'}>
        <ErrorMessage errors={errors} />
        <form onSubmit={formSubmit} className={'space-y-4'}>
            <InputField
                label={'Uživatelské jméno'}
                name={'username'}
                handler={inputHandle}
                type={'text'}
                value={data.username}
            />
            <InputField
                label={'Email'}
                name={'email'}
                handler={inputHandle}
                type={'email'}
                value={data.email}
            />
            <InputField
                label={'Heslo'}
                name={'password'}
                handler={inputHandle}
                type={'password'}
                value={data.password}
            />
            <InputField
                label={'Heslo (Ověření)'}
                name={'password_confirmation'}
                handler={inputHandle}
                type={'password'}
                value={data.password_confirmation}
            />
            <div id={'turnslite-widget'} ref={ref}></div>
            <InputButton type={'submit'} loading={loading} className={`text-slate-50 ${loading ? 'bg-slate-900 hover:bg-slate-800 focus:bg-slate-800' : 'bg-brand hover:bg-blue-600 focus:bg-blue-600'} focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 ${loading ? 'focus-within:ring-slate-900 focus-within:ring-offset-white' : 'focus-within:ring-brand focus-within:ring-offset-white'} transition`}>Zaregistrovat se</InputButton>
            <div className={'flex items-center justify-center gap-2'}>
                <span className={'block text-slate-900 font-medium text-sm'}>Už máte u nás účet?</span>
                <Link href={route('login')} className={'text-sm text-brand underline hover:text-blue-600 focus:outline-none focus-within:ring-1 focus-within:ring-brand focus-within:rounded focus-within:ring-offset-2 focus-within:ring-offset-white'}>Přihlásit se</Link>
            </div>
        </form>
    </div></>
}

RegisterPage.layout = page => <ProviderLayout><Auth>{page}</Auth></ProviderLayout>

export default RegisterPage;
