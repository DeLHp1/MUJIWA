<template>
    <div class="pointer-events-none px-6 pb-5 sm:flex sm:justify-center lg:px-8">
        <div
            class="pointer-events-auto flex items-center justify-between gap-x-6 rounded-xl bg-slate-900 py-2.5 px-6 sm:py-3 sm:pr-3.5 sm:pl-4">
            <p class="text-sm leading-6 text-white">
                <a href="#"
                    ><strong class="font-semibold">Příprava nových aktualizací se blíží</strong
                    ><svg
                        viewBox="0 0 2 2"
                        class="mx-2 inline h-0.5 w-0.5 fill-current"
                        aria-hidden="true">
                        <circle
                            cx="1"
                            cy="1"
                            r="1" /></svg
                    >Již brzy o víkendu&nbsp;</a
                >
            </p>
        </div>
    </div>
    <section class="relative isolate overflow-hidden rounded-xl bg-slate-900 shadow-xl">
        <div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Webová aplikace MW UI V3 <br />pracuje na aktualizacích.
                </h2>
                <p class="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
                    Aktualizace, které byli slíbené na našem instagramu, se aktuálně připravují a budeme vás informovat
                    na našem discordu a instagramu o jednotlivých novinkách.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="https://instagram.com/project_mujiwa"
                        class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >Náš instagram</a
                    >
                    <a
                        href="https://discord.mujiwa.cz"
                        class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >Náš Discord</a
                    >
                </div>
            </div>
        </div>
        <svg
            viewBox="0 0 1024 1024"
            class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
                fill-opacity="0.7" />
            <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                    <stop stop-color="#7775D6" />
                    <stop
                        offset="1"
                        stop-color="#E935C1" />
                </radialGradient>
            </defs>
        </svg>
    </section>
</template>

<script lang="ts">
import LayoutApp from '@/views/layouts/app/layoutApp.vue'

export default defineComponent({
    layout: LayoutApp,
})
</script>
