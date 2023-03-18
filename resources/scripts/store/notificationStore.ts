// Imports
import { defineStore } from 'pinia'
import generateID from '@/scripts/utils/generateID'

//Define store
export const useNotificationStore = defineStore('notification', () => {
    //Define Ref
    const state = ref<MW.Notification.NotificationRefs>([])

    //Define Actions
    const add = ({ type, title, description, options }: MW.Notification.NotificationAddInterface): void => {
        state.value = [...state.value, { id: generateID('notification'), type, title, description, options }]
    }

    const remove = ({ id }: MW.Notification.NotificationRemoveInterface): void => {
        state.value = state.value.filter((e: MW.Notification.NotificationExtends) => id !== e.id)
    }

    //return all
    return { state, add, remove }
})
