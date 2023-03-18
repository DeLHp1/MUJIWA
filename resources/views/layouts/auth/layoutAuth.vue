<template>
    <main class="mw-auth-layout">
        <div class="mw-auth-logo">
            <Logo class="mx-auto h-8 w-auto" />
        </div>
        <div class="mw-auth-content">
            <Presence exit-before-enter>
                <Motion
                    :key="$page.url"
                    :initial="{ opacity: 0, y: 10 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :exit="{ opacity: 0, y: 10 }"
                    :transition="{ easing: 'ease-in-out' }">
                    <slot />
                </Motion>
            </Presence>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { Motion, Presence } from 'motion/vue'
</script>

<style lang="css" scoped>
.mw-auth-layout {
    @apply flex min-h-full flex-col justify-center py-12 px-4 sm:px-6 lg:px-8;
}

.mw-auth-logo {
    @apply mx-auto w-full max-w-md;
}

.mw-auth-content {
    @apply mx-auto mt-8 w-full max-w-md;
}
</style>
