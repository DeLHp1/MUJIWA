declare namespace App.Data.Auth {
export type ForgotPasswordRequest = {
email: string | null;
};
export type LoginRequest = {
username: string | null;
password: string | null;
remember: boolean | null;
};
export type RegisterRequest = {
username: string | null;
email: string | null;
password: string | null;
password_confirmation: string | null;
};
export type ResetPasswordRequest = {
email: string | null;
password: string | null;
password_confirmation: string | null;
token: string | null;
};
}
declare namespace App.Data.Shared {
export type NotificationData = {
type: App.Enums.Notification.NotificationType;
title: string;
description?: string;
options: App.Data.Shared.NotificationOptions | null;
};
export type NotificationOptions = {
autoClose?: boolean;
timeout?: number;
};
export type SharedData = {
user: App.Data.Shared.UserData | null;
notification: App.Data.Shared.NotificationData | null;
};
export type UserData = {
username: string;
profile_picture_url: string;
banner_picture_url?: string | null;
created_at: string;
};
}
declare namespace App.Enums.Notification {
export type NotificationType = 'success' | 'error' | 'warning' | 'info';
}
