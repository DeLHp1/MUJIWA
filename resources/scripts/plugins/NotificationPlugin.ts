import { usePage, router } from '@inertiajs/vue3'
import { useNotificationStore } from '@/scripts/store/notificationStore'

export const notification = () => {
    const store = useNotificationStore()

    router.on('finish', () => {
        const notification = usePage().props.notification

        if (notification) {
            store.add({ ...notification })
        }
    })
}
