import { Component } from 'vue'

export {}

declare global {
    namespace MW.Notification {
        export type NotificationRefs = Array<NotificationExtends> | Array<null>

        export type NotificationExtends = App.Data.Shared.NotificationData & {
            id: string
        }

        export interface NotificationAddInterface {
            type: App.Enums.Notification.NotificationType
            title: string

            description?: string

            options?: App.Data.Shared.NotificationOptions
        }

        export interface NotificationRemoveInterface {
            id: string
        }
    }
}
