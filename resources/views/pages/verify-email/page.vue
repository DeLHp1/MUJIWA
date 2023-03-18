<template>
    <div class="mw-verify-email-header">
        <h1 class="mw-verify-email-h1">Ověření Emailové adresy</h1>
    </div>
    <div class="mw-verify-email-container">
        <div class="header">
            <div class="icon-container">
                <EnvelopeIcon class="icon" />
            </div>
            <p class="description">
                Pro správné fungování našich služeb je potřeba mít ověřený a dostupný email na našich stránkách, poslali
                jsme vám email na kterém se nachází odkaz k ověření.
            </p>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2">
            <a
                href="https://discord.mujiwa.cz"
                class="col-span-2 flex w-full items-center justify-center rounded-md bg-slate-800 px-3 py-2 font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-white"
                >Náš discord</a
            >
            <Link
                method="delete"
                as="button"
                :href="route('logout')"
                class="flex w-full items-center justify-center rounded bg-blue-100 px-3 py-2 font-medium text-blue-400 transition hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
                >Odhlásit se</Link
            >
            <button
                class="flex w-full items-center justify-center rounded bg-blue-600 px-3 py-2 font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                @click.prevent="submitNotify">
                Poslat znovu
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup scoped>
import { EnvelopeIcon } from '@heroicons/vue/24/solid'

const form = useForm({})
const submitNotify = () => {
    form.post(route('verification.send'))
}
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css">
.mw-verify-email-header {
    @apply mx-auto w-full max-w-md;
}
.mw-verify-email-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-verify-email-container .header {
    @apply relative;
}

.mw-verify-email-container .header .description {
    @apply mt-4 block text-sm font-medium leading-6 text-slate-600;
}

.icon-container {
    @apply mx-auto max-w-min rounded-full bg-blue-100 p-4;
}

.icon-container .icon {
    @apply h-12 w-12 text-blue-500;
}

.mw-verify-email-header .mw-verify-email-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}
</style>
