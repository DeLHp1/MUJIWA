<template>
    <div class="mw-register-header">
        <h1 class="mw-register-h1">Zaregistrovat se do MW</h1>
    </div>
    <div class="mw-register-container">
        <ValidationAlert :errors="form.errors" />
        <form
            class="form"
            @submit.prevent="submitForm">
            <InputText
                v-model="form.email"
                label="Email"
                type="email"
                name="email"
                required />
            <InputText
                v-model="form.username"
                label="Uživatelské jméno"
                name="username" />
            <InputPassword
                v-model="form.password"
                label="Heslo"
                type="password"
                name="password" />
            <InputPassword
                v-model="form.password_confirmation"
                label="Heslo (Ověření)"
                type="password"
                name="password_confirmation" />
            <SubmitButton
                class="font-medium"
                :processing="form.processing"
                >Zaregistrovat se</SubmitButton
            >
        </form>
    </div>
    <div class="mw-register-container second">
        <h1 class="header">Máte u nás už účet?</h1>
        <p class="description">V tom případě se stačí přihlásit na stránce login a užij si náš projekt MUJIWA.</p>
        <Link
            :href="route('login')"
            class="link"
            >Přihlásit se</Link
        >
    </div>
</template>

<script lang="ts" setup>
const form = useForm<App.Data.Auth.RegisterRequest>('register', {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const submitForm = () => {
    form.post(route('register'), { preserveScroll: true })
}
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css" scoped>
.mw-register-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-register-container.second {
    @apply bg-slate-900 text-slate-50;
}

.mw-register-container .form {
    @apply space-y-6;
}

.mw-register-header {
    @apply mx-auto w-full max-w-md;
}

.mw-register-header .mw-register-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}

.mw-register-container.second .header {
    @apply font-bold leading-7 tracking-tight;
}

.mw-register-container.second .description {
    @apply mt-1 text-sm font-medium leading-5 text-slate-400;
}

.mw-register-container.second .link {
    @apply mt-4 flex items-center justify-center rounded-md bg-white px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900;
}
</style>
