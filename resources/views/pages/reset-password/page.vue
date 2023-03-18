<template>
    <div class="mw-reset-password-header">
        <h1 class="mw-reset-password-h1">Změna hesla od účtu MW</h1>
    </div>
    <div class="mw-reset-password-container">
        <div class="header">
            <div class="icon-container">
                <LockClosedIcon class="icon" />
            </div>
            <p class="description">Zadejte své nové heslo ke svému účtu MW, které budete nově využívat.</p>
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
                disabled
                label="Email" />
            <InputPassword
                v-model="form.password"
                name="password"
                type="password"
                required
                label="Heslo" />
            <InputPassword
                v-model="form.password_confirmation"
                name="password_confirmation"
                type="password"
                required
                label="Heslo (Ověření)" />
            <SubmitButton :processing="form.processing">Změnit heslo</SubmitButton>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { LockClosedIcon } from '@heroicons/vue/24/solid'

const props = defineProps<ResetPasswordProps>()

const form = useForm<App.Data.Auth.ResetPasswordRequest>('reset-password', {
    email: props.email,
    password: '',
    password_confirmation: '',
    token: props.token,
})

interface ResetPasswordProps {
    email: string
    token: string
}
const submitForm = () => {
    form.post(route('password.update'))
}
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css" scoped>
.mw-reset-password-header {
    @apply mx-auto w-full max-w-md;
}
.mw-reset-password-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-reset-password-container .form {
    @apply space-y-6;
}

.mw-reset-password-container .header {
    @apply relative;
}

.mw-reset-password-container .header .description {
    @apply mt-4 block text-sm font-medium leading-6 text-slate-600;
}

.icon-container {
    @apply mx-auto max-w-min rounded-full bg-blue-100 p-4;
}

.icon-container .icon {
    @apply h-12 w-12 text-blue-500;
}

.mw-reset-password-header .mw-reset-password-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}
</style>
