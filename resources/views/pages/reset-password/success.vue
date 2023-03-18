<template>
    <div class="mw-forgot-password-header">
        <h1 class="mw-forgot-password-h1">Změna hesla od účtu MW</h1>
    </div>
    <div class="mw-forgot-password-container">
        <div class="header">
            <div class="icon-container">
                <CheckCircleIcon class="icon" />
            </div>
            <p class="description">Vaše heslo bylo změněno, můžete se rovnou pomocí nového hesla přihlásit</p>
        </div>
        <Link
            :href="route('login')"
            class="link"
            >Vrátit se zpět na přihlášení</Link
        >
    </div>
</template>

<script lang="ts" setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
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

.mw-forgot-password-container .link {
    @apply mt-4 flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white;
}
</style>
