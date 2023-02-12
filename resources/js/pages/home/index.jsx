import AppLayout from "@shared/layouts/app/AppLayout";

const HomePage = () => {
    return <div className={'relative mt-8 px-4 mx-auto max-w-7xl h-[96em]'}>
        <h1 className={'text-4xl tracking-tight font-bold text-slate-900 text-center'}>Na stránce se pracuje</h1>
        <span className={'block text-xl font-medium text-slate-500 text-center'}>Obsah se bude přidávat pomocí malých updates</span>
        <span className={'mt-4 block text-medium text-slate-700 text-center'}>S pozdravem Adalbertus</span>
    </div>
}

HomePage.layout = page => <AppLayout>{page}</AppLayout>

export default HomePage;
