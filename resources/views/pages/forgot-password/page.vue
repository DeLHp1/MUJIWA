<template>
    <div class="mw-forgot-password-header">
        <h1 class="mw-forgot-password-h1">Zapomenuté heslo do MW</h1>
    </div>
    <div class="mw-forgot-password-container">
        <div class="header">
            <div class="icon-container">
                <EnvelopeIcon class="icon" />
            </div>
            <p class="description">
                Zadejte do kolonky svojí emailovou adresu, pošleme vám odkaz přes který bude možné resetovat heslo.
            </p>
        </div>
        <form
            class="form mt-4"
            @submit.prevent="submitForm">
            <ValidationAlert :errors="form.errors" />
            <InputText
                v-model="form.email"
                name="email"
                type="email"
                required
                label="Email" />
            <SubmitButton :processing="form.processing">Odeslat žádost</SubmitButton>
        </form>
    </div>
    <div class="mw-forgot-password-footer">
        <Link
            :href="route('login')"
            class="link"
            >Vrátit se zpět na přihlášení</Link
        >
    </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon } from '@heroicons/vue/24/solid'

const form = useForm<App.Data.Auth.ForgotPasswordRequest>('forgot-password', { email: '' })

const submitForm = () => {
    form.post(route('forgot-password'))
}
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css" scoped>
.mw-forgot-password-header {
    @apply mx-auto w-full max-w-md;
}
.mw-forgot-password-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-forgot-password-container .form {
    @apply space-y-6;
}

.mw-forgot-password-container .header {
    @apply relative;
}

.mw-forgot-password-container .header .description {
    @apply mt-4 block text-sm font-medium leading-6 text-slate-600;
}

.icon-container {
    @apply mx-auto max-w-min rounded-full bg-blue-100 p-4;
}

.icon-container .icon {
    @apply h-12 w-12 text-blue-500;
}

.mw-forgot-password-header .mw-forgot-password-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}

.mw-forgot-password-footer {
    @apply mt-4 flex items-center justify-center;
}

.mw-forgot-password-footer .link {
    @apply rounded-md text-blue-500 underline transition hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-100;
}
</style>
