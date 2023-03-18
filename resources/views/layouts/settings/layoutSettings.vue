<template>
    <div
        id="SettingsPage"
        class="relative mx-auto max-w-5xl">
        <div class="md:flex md:items-center">
            <div class="min-w-0 flex-1">
                <h2 class="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Nastavení uživatele
                </h2>
            </div>
        </div>
        <div class="mt-5 grid grid-cols-1 gap-y-6 pt-2 pb-6 md:grid-cols-4 md:gap-y-0 md:gap-x-12">
            <div class="relative md:col-span-1">
                <SideMenu
                    :key="$page.url"
                    :items="SubmenuItems" />
            </div>
            <div class="relative md:col-span-3">
                <Presence exit-before-enter>
                    <Motion
                        :key="$page.url"
                        :initial="{ opacity: 0, y: 10 }"
                        :animate="{ opacity: 1, y: 0 }"
                        :exit="{ opacity: 0, y: 10 }"
                        :transition="{ easing: 'ease-in-out' }">
                        <div class="space-y-4">
                            <slot />
                        </div>
                    </Motion>
                </Presence>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideMenu from '@/views/layouts/settings/partials/SideMenu.vue'
import { Component as ComponentDefinition } from 'vue'
import { UserIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/solid'
import { Presence, Motion } from 'motion/vue'
import { RouterGlobal } from 'momentum-trail'

const user = computed(() => usePage().props.user)

interface SidemenuItem {
    label: string
    icon?: ComponentDefinition
    href: keyof RouterGlobal['routes']
}

const SubmenuItems: Array<SidemenuItem> = [
    {
        label: 'Profil',
        href: 'settings.profile',
        icon: UserIcon,
    },
    {
        label: 'Účet',
        href: 'settings.account',
        icon: AdjustmentsHorizontalIcon,
    },
]
</script>
