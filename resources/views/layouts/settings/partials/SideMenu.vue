<template>
    <Disclosure
        v-slot="{ open }"
        as="template"
        :default-open="!isMobile">
        <DisclosureButton
            v-if="isMobile"
            as="button"
            class="flex w-full items-center justify-between rounded-md border px-3 py-2 font-medium transition ui-open:border-blue-100 ui-open:bg-blue-200 ui-open:text-blue-500 ui-not-open:border-slate-100 ui-not-open:bg-slate-200 ui-not-open:text-slate-600">
            <span class="block">Menu</span>
            <ChevronDownIcon
                class="h-6 w-6 transform transform-gpu transition ui-open:rotate-180 ui-not-open:rotate-0" />
        </DisclosureButton>
        <TransitionRoot
            as="template"
            :show="open"
            enter="transition duration-100 ease-out"
            enter-from="transform scale-95 opacity-0"
            enter-to="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leave-from="transform scale-100 opacity-100"
            leave-to="transform scale-95 opacity-0">
            <DisclosurePanel
                as="nav"
                class="mt-3 space-y-1 sm:mt-0"
                aria-label="Sidebar">
                <Link
                    v-for="item in props.items"
                    :key="item.label"
                    :href="route(item.href)"
                    class="group flex items-center rounded-md px-3 py-2 text-sm font-medium transition"
                    :class="
                        current(item.href)
                            ? 'bg-blue-200 text-blue-500'
                            : 'text-slate-600 hover:bg-slate-200 hover:text-slate-500'
                    ">
                    <component
                        :is="item.icon"
                        v-if="item.icon"
                        class="-ml-1 mr-3 h-6 w-6 flex-shrink-0 transition"
                        :class="current(item.href) ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-500'" />
                    <span class="truncate">{{ item.label }}</span>
                </Link>
            </DisclosurePanel>
        </TransitionRoot>
    </Disclosure>
</template>

<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Component as ComponentDefinition } from 'vue'
import { RouterGlobal } from 'momentum-trail'

const props = defineProps<SidemenuProps>()

interface SidemenuItem {
    label: string
    icon?: ComponentDefinition

    href: keyof RouterGlobal['routes']
}
interface SidemenuProps {
    items: Array<SidemenuItem>
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.isSmallerOrEqual('sm')
</script>
