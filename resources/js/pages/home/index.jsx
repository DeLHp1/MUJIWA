import ProviderLayout from "@shared/layouts/provider/ProviderLayout";

const HomePage = () => {
    return <main className={'flex flex-col flex-1 h-full items-center justify-center'}>
        <h1 className={'text-slate-900 font-bold text-3xl tracking-tight'}>Na stránce probíhá rekonstrukce</h1>
        <p className={'block text-slate-600 font-medium text-xl'}>Jednotlivé stránky budou doplněni pomocí malých updates.</p>
    </main>
}

HomePage.layout = page => <ProviderLayout>{page}</ProviderLayout>

export default HomePage;
