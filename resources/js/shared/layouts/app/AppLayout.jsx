import Navbar from "@components/Navbar";

export default function AppLayout({children})
{
    return <main className={'relative'}>
        <Navbar />
        {children}
    </main>
}
