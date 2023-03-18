<template>
    <footer class="relative bg-transparent">
        <div class="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <a
                    v-for="item in staticNavigation"
                    :key="item.name"
                    :href="item.href"
                    :class="item.class"
                    rel="nofollow noreferrer noopener">
                    <Component
                        :is="item.icon"
                        class="h-6 w-6" />
                </a>
            </div>
            <div class="mt-6 md:order-1 md:mt-0">
                <div class="flex flex-col gap-1 md:items-start">
                    <LogoTeam class="h-6 w-auto" />
                    <p class="text-center text-xs font-medium text-slate-600 md:text-left">
                        Projekt pro komunitu vytvořila skupina v roce &copy; 2023
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import Discord from '@/views/components/icons/Discord.vue'
import Github from '@/views/components/icons/Github.vue'
import Instagram from '@/views/components/icons/Instagram.vue'

interface StaticNavInterface {
    name: string
    href: string
    class: string
    icon: Component
}

let staticNavigation: Array<StaticNavInterface>
staticNavigation = [
    {
        name: 'Discord',
        href: 'https://discord.mujiwa.cz',
        class: 'text-slate-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition',
        icon: Discord,
    },
    {
        name: 'Github',
        href: 'https://github.com/PROJECT-MUJIWA',
        class: 'text-slate-500 hover:text-slate-600 focus:outline-none focus:text-slate-600 transition',
        icon: Github,
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/project_mujiwa',
        class: 'text-slate-500 hover:text-red-600 focus:outline-none focus:text-red-600 transition',
        icon: Instagram,
    },
]
</script>
