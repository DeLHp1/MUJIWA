<template>
    <div class="mw-activate-account-header">
        <h1 class="mw-activate-account-h1">Aktivace účtu MUJIWA</h1>
    </div>
    <div class="mw-activate-account-container">
        <div class="header">
            <div class="icon-container">
                <CheckBadgeIcon class="icon" />
            </div>
        </div>
        <div class="container">
            <h1 class="h1">Váš účet je v procesu schvalování</h1>
            <p class="description">
                Váš účet nebyl zatím aktivován žádným členem MUJIWA, který má oprávění schvalovat nové účty
            </p>
            <p class="description">
                Náš web využívá ke schvalování nových účtu stejný postup jako naši partneři z Hiyori a to je ručné
                schválení vaší registrace oprávněným členem, který má na to právo.
            </p>
            <p class="description">
                Jakmile bude váš účet schválen, budeme vás informovat na vašem emailu, tento proces může trvat klidně
                několik minut nebo i několik hodin podle časové náročnosti.
            </p>
            <p class="description">Děkujeme za pochopení, Tým MUJIWA.</p>
        </div>
        <div class="button-container">
            <a
                class="primary"
                href="https://discord.mujiwa.cz"
                ><Discord class="mr-1 h-5 w-5 text-white" />Náš Discord</a
            >
            <Link
                :href="route('logout')"
                method="delete"
                as="button"
                class="secondary"
                >Odhlásit se</Link
            >
        </div>
    </div>
</template>

<script lang="ts" setup scoped>
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
</script>

<script lang="ts">
import LayoutAuth from '@/views/layouts/auth/layoutAuth.vue'

export default defineComponent({
    layout: LayoutAuth,
})
</script>

<style lang="css">
.mw-activate-account-header {
    @apply mx-auto w-full max-w-md;
}
.mw-activate-account-container {
    @apply mt-4 rounded-xl bg-white py-8 px-4 shadow sm:px-10;
}

.mw-activate-account-container .header {
    @apply relative;
}

.icon-container {
    @apply mx-auto max-w-min rounded-full bg-blue-100 p-4;
}

.icon-container .icon {
    @apply h-12 w-12 text-blue-500;
}

.mw-activate-account-header .mw-activate-account-h1 {
    @apply text-center text-xl font-medium text-slate-900;
}

.container {
    @apply relative mt-6 space-y-4;
}

.container h1 {
    @apply text-center text-xl font-medium tracking-tight text-slate-900;
}

.container .description {
    @apply text-sm leading-6 tracking-tight text-slate-600;
}

.button-container {
    @apply mt-4 flex flex-col gap-2;
}

.button-container .primary {
    @apply flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 font-medium text-white shadow-sm transition hover:bg-slate-800 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-white;
}

.button-container .secondary {
    @apply flex items-center justify-center rounded-md bg-blue-100 px-3 py-2 font-medium text-slate-900 shadow-sm transition hover:bg-blue-200 focus:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white;
}
</style>
