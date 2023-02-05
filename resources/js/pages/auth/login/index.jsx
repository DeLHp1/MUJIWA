import Auth from "@shared/layouts/auth/Auth";
import {Link, useForm} from "@inertiajs/react";
import useRoute from "@hooks/useRoute";
import {motion} from "framer-motion";
import Balancer from "react-wrap-balancer";
import {Turnstile} from "@marsidev/react-turnstile";
import {useRef} from "react";
import InputField from "@shared/InputField";
import InputButton from "@shared/InputButton";
import InputCheckbox from "@shared/InputCheckbox";
import ErrorMessage from "@shared/ErrorMessage";

const LoginPage = () => {

    return <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 50}} transition={{type: 'spring'}}>
        <div className={'max-w-lg w-full mx-auto mt-6'}>
            <h6 className={'block text-center text-xl sm:text-3xl font-bold tracking-tight text-slate-900'}>
                <Balancer>Vítámě tě zpět na naší stránce.</Balancer>
            </h6>
            <span className={'block mt-1 text-center text-lg sm:text-xl font-medium tracking-tight text-slate-700'}>
            <Balancer>Přihlašte se pomocí vašeho účtu MW</Balancer>
            </span>
        </div>
        <div className={'shadow-md rounded-md overflow-hidden grid grid-cols-1 mt-8 mx-auto max-w-lg w-full'}>
            <LeftSide />
            <RightSide />
        </div>
        <span className={'mt-2 mx-auto block max-w-lg w-full text-center text-sm font-medium text-slate-400'}>Formulář je chráněn Turnstile od společnosti Cloudflare</span>
    </motion.div>
}


const LeftSide = () => {


    const route = useRoute()

    const ref= useRef(null);

    const form = useForm({'username': '', 'password': '', 'remember': false, 'cf-turnstile-response': ''})

    const inputHandle = el => {
        const {name, value} = el.target;
        form.setData(name, value);
    }

    const formSubmit = e => {
        e.preventDefault();
        form.post(route('login'), {onError: () => ref.current.reset()})
    }


    return (
        <div className={'bg-white px-6 py-8'}>
            <ErrorMessage  errors={form.errors} />
        <form onSubmit={formSubmit} className={'space-y-4'}>
            <InputField
                label={'Uživatelské jméno'}
                name={'username'}
                type={'text'}
                value={form.data.username}
                handler={inputHandle}
            />
            <InputField
                label={'Heslo'}
                name={'password'}
                type={'password'}
                value={form.data.password}
                handler={inputHandle}
            />
            <Turnstile ref={ref} siteKey={import.meta.env.VITE_TURNSTILE_TOKEN_SITE} options={{size: 'invisible'}} onSuccess={(token) => form.setData('cf-turnstile-response', token)} />
            <div className={'flex justify-between items-center'}>
                <div className={'flex items-center'}>
                    <InputCheckbox checked={form.data.remember} setChecked={form.setData} inputCheck={'remember'} srOnly={'Zapamatovat si mě'} />
                    <span className={'text-slate-900 ml-2 font-medium text-xs sm:text-sm'}>Zapamatovat si mě</span>
                </div>
                <Link href={'#'} className={'text-xs sm:text-sm text-brand underline hover:text-blue-600 focus:outline-none focus-within:ring-1 focus-within:ring-brand focus-within:rounded focus-within:ring-offset-2 focus-within:ring-offset-white'}>Zapomenuté heslo?</Link>
            </div>
            <InputButton className={`text-slate-50 ${form.processing ? 'bg-slate-900 hover:bg-slate-800 focus:bg-slate-800' : 'bg-brand hover:bg-blue-600 focus:bg-blue-600'} focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 ${form.processing ? 'focus-within:ring-slate-900 focus-within:ring-offset-white' : 'focus-within:ring-brand focus-within:ring-offset-white'} transition`} loading={form.processing}>Přihlásit se</InputButton>
        </form>
    </div>
    )
}

const RightSide = () => {

    const route = useRoute()

    return <div className={'bg-slate-900 relative overflow-hidden'}>
        <svg
            className="absolute inset-0 z-0 h-full w-full stroke-white/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={100}
                    height={100}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M.5 200V.5H200" fill="none"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"/>
        </svg>
        <svg
            viewBox="0 0 1108 632"
            aria-hidden="true"
            className="absolute  z-0 w-full max-w-none transform-gpu blur-3xl h-full"
        >
            <path
                fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                fillOpacity=".2"
                d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
            />
            <defs>
                <linearGradient
                    id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                    x1="1220.59"
                    x2="-85.053"
                    y1="432.766"
                    y2="638.714"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4F46E5"/>
                    <stop offset={1} stopColor="#80CAFF"/>
                </linearGradient>
            </defs>
        </svg>
        <div className={'relative px-6 py-8'}>
            <h1 className={'text-white text-lg font-bold'}>Nemáte na naší stránce účet?</h1>
            <span className={'block text-slate-300 text-sm mt-1 font-medium'}>To není vůbec problém, díky našemu průvodci si můžeš u nás jednoduše a rychle vytvořit svůj účet.</span>
            <Link href={route('register')}
                  className={'relative mt-6 font-medium flex items-center justify-center w-full px-4 py-3 rounded-md shadow bg-white text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-white focus-within:ring-offset-slate-900 transition'}>Zaregistrovat
                se</Link>
        </div>
    </div>
}


LoginPage.layout = page => <Auth>{page}</Auth>

export  default LoginPage;
