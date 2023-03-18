<template>
    <Menu
        v-slot="{ open }"
        as="div"
        class="relative inline-block text-left">
        <div>
            <MenuButton>
                <img
                    :src="user.profile_picture_url"
                    alt="Profilová fotka"
                    class="inline-block h-10 w-10 rounded-md" />
            </MenuButton>
        </div>
        <TransitionRoot
            :show="open"
            enter="transition duration-100 ease-out"
            enter-from="transform scale-95 opacity-0"
            enter-to="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leave-from="transform scale-100 opacity-100"
            leave-to="transform scale-95 opacity-0">
            <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="p-1">
                    <div class="flex items-start px-3 py-2">
                        <img
                            :src="user.profile_picture_url"
                            alt="profilová fotka"
                            class="inline-block h-8 w-8 rounded-md" />
                        <div class="ml-3">
                            <p class="truncate text-sm font-medium text-slate-900">{{ user.username }}</p>
                            <p class="truncate text-xs font-medium text-slate-600">Uživatel webu MUJIWA</p>
                        </div>
                    </div>
                    <MenuItem v-slot="{ active }">
                        <button
                            class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                            :class="active ? 'bg-blue-200 text-blue-500' : 'text-slate-500'"
                            @click="linkToRoute('settings.profile', 'get')">
                            <Cog6ToothIcon class="mr-2 h-5 w-5" />
                            Nastavení
                        </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                        <button
                            class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                            :class="active ? 'bg-red-200 text-red-500' : 'text-slate-500'"
                            @click="linkToRoute('logout', 'delete')">
                            <ArrowLeftOnRectangleIcon class="mr-2 h-5 w-5" />
                            Odhlásit se
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </TransitionRoot>
    </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems, TransitionRoot } from '@headlessui/vue'
import { Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/20/solid'

const linkToRoute = (path: any, method: any) => {
    router.visit(route(path), {
        method,
    })
}

const user = computed<App.Data.Shared.UserData>(() => usePage().props.user)
</script>
