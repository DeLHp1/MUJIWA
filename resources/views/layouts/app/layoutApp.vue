<template>
    <div class="h-full">
        <NotificationContainer />
        <Navbar />
        <main
            ref="documentElement"
            class="relative min-h-full">
            <div class="mx-auto h-full max-w-screen-2xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
                <Presence exit-before-enter>
                    <Motion
                        :key="urlParentOnly"
                        :initial="{ opacity: 0, y: 10 }"
                        :animate="{ opacity: 1, y: 0 }"
                        :exit="{ opacity: 0, y: 10 }"
                        :transition="{ easing: 'ease-in-out' }"
                        @transitionstart="lockScroll"
                        @transitionend="unlockScroll">
                        <slot />
                    </Motion>
                </Presence>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script lang="ts" setup>
import Navbar from '@/views/layouts/app/partials/Navbar.vue'
import Footer from '@/views/layouts/app/partials/Footer.vue'
import { Motion, Presence } from 'motion/vue'
import { useScrollLock } from '@vueuse/core'
import NotificationContainer from '@/views/layouts/app/partials/NotificationContainer.vue'

const documentElement = ref<HTMLElement>()
const isLocked = useScrollLock(documentElement)

const lockScroll = () => {
    isLocked.value = true
}

const unlockScroll = () => {
    isLocked.value = false
}

const urlParentOnly = computed(() => {
    const path = usePage().url
    return path.split('/')[1]
})
</script>
