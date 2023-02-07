import ToastNotificationProvider from "@context/ToastNotificationProvider";
import {Provider} from "react-wrap-balancer";
import ToastLayout from "@shared/layouts/toast/ToastLayout";
import LaravelEchoProvider from "@context/LaravelEchoProvider";
import AutomaticUpdateUIService from "@services/AutomaticUpdateUIService";

export default function ProviderLayout({children})
{
    return (
        <LaravelEchoProvider>
            <ToastNotificationProvider>
                <ToastLayout>
                    <AutomaticUpdateUIService>
                        <Provider>
                            {children}
                        </Provider>
                    </AutomaticUpdateUIService>
                </ToastLayout>
            </ToastNotificationProvider>
        </LaravelEchoProvider>
    );
}
