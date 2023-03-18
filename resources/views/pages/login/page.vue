<template>
    <div class="mw-login-header">
        <h1 class="mw-login-h1">Přihlásit se k účtu</h1>
    </div>
    <div class="mw-login-container">
        <form
            class="form"
            @submit.prevent="submitForm">
            <ValidationAlert :errors="form.errors" />
            <InputText
                v-model="form.username"
                label="Uživatelské jméno"
                name="username" />
            <InputPassword
                v-model="form.password"
                label="Heslo"
                name="password" />
            <div class="mw-login-flex">
                <div class="flex items-center">
                    <Switch
                        v-model="form.remember"
                        class="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-not-checked:bg-slate-900">
                        <span
                            class="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1"></span>
                    </Switch>
                    <span class="ml-2 text-sm text-slate-700">Zapamtovat si mě</span>
                </div>
                <div class="text-sm">
                    <Link
                        :href="route('forgot-password')"
                        class="font-medium text-blue-500 underline transition hover:text-blue-700"
                        >Zapomenuté heslo</Link
                    >
                </div>
            </div>
            <SubmitButton
                class="font-medium"
                :processing="form.processing"
                >Přihlásit se</SubmitButton
            >
        </form>
    </div>
    <div class="mw-login-container second">
        <h1 class="header">Nemáte u nás účet?</h1>
        <p class="description">
            To není vůbec problém, díky našemu průvodci si můžeš u nás jednoduše a rychle vytvořit svůj účet.
        </p>
        <Link
            :href="route('register')"
            class="link"
            >Zaregistrovat se</Link
        >
    </div>
</template>

<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

const form = useForm<App.Data.Auth.LoginRequest>('login', { username: '', password: '', remember: false })

const submitForm = () => {
    form.post(route('login'), { preserveScroll: true })
}
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css" scoped>
.mw-login-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-login-container.second {
    @apply bg-slate-900 text-slate-50;
}

.mw-login-container .form {
    @apply space-y-6;
}

.mw-login-header {
    @apply mx-auto w-full max-w-md;
}

.mw-login-header .mw-login-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}

.mw-login-flex {
    @apply flex items-center justify-between;
}

.mw-login-container.second .header {
    @apply font-bold leading-7 tracking-tight;
}

.mw-login-container.second .description {
    @apply mt-1 text-sm font-medium leading-5 text-slate-400;
}

.mw-login-container.second .link {
    @apply mt-4 flex items-center justify-center rounded-md bg-white px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900;
}
</style>
