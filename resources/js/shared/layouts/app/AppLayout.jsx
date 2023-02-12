import Navbar from "@components/Navbar";
import MobileNavbar from "@components/MobileNavbar";
import ProviderLayout from "@shared/layouts/provider/ProviderLayout";
import Banner from "@components/Banner";

export default function AppLayout({children})
{
    return <ProviderLayout>
        <main className={'relative'}>
            <Banner title={'Na stránce se aktuálně intenzivně pracuje - Všechny změny uvidíte automaticky hned po nasazení'} />
            <Navbar />
            <MobileNavbar />
            {children}
        </main>
    </ProviderLayout>
}
