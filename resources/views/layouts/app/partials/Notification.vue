<template>
    <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        @mouseenter="stopTimeout"
        @mouseleave="startTimeout">
        <div class="p-4">
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <component
                        :is="Icon"
                        class="h-6 w-6"
                        :class="IconColor" />
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-slate-900">{{ title }}</p>
                    <p
                        v-if="description"
                        class="mt-1 text-sm text-slate-500">
                        {{ description }}
                    </p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                    <button
                        type="button"
                        class="inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        @click="close">
                        <XMarkIcon class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
//Imports
import { Component as defineComponent } from 'vue'
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { useNotificationStore } from '@/scripts/store/notificationStore'

//Props
const props = withDefaults(defineProps<NotificationItemProps>(), {
    description: '',
    options: (optionsProps) => ({ autoClose: true, timeout: 3000 } as App.Data.Shared.NotificationOptions),
})

//refs
const timeoutRef = ref<null | NodeJS.Timeout>(null)

//Constants
const store = useNotificationStore()

//Events
onMounted(() => {
    if (props.options.autoClose) {
        setTimeoutClose(props.options.timeout)
    }
})

//Actions
const close = () => {
    store.remove({ id: props.id })
}

const setTimeoutClose = (timeMS: number) => {
    timeoutRef.value = setTimeout(() => {
        close()
    }, timeMS)
}

const stopTimeout = () => {
    if (!props.options.autoClose) return
    clearTimeout(timeoutRef.value)
}

const startTimeout = () => {
    if (!props.options.autoClose) return
    setTimeoutClose(props.options.timeout)
}

//Object Value
const TypeIconComponent: TypeIconComponentType = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
}

const TypeIconColor: TypeIconColorType = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
}

//Computed
const Icon = computed<defineComponent>(() => TypeIconComponent[props.type])
const IconColor = computed<string>(() => TypeIconColor[props.type])

//Interfaces
type TypeIconComponentType = Record<App.Enums.Notification.NotificationType, defineComponent>
type TypeIconColorType = Record<App.Enums.Notification.NotificationType, string>
interface NotificationItemProps {
    title: string

    description?: string

    id: string

    options?: App.Data.Shared.NotificationOptions

    type: App.Enums.Notification.NotificationType
}
</script>
