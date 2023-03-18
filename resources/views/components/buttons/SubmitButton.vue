<template>
    <button
        type="submit"
        class="mw-submit-button"
        :class="isProcessing ? 'disabled' : ''"
        :disabled="isProcessing">
        <span
            v-show="isProcessing"
            class="loader">
            <CircleSpinLoader class="icon" />
        </span>
        <span
            class="text"
            :class="isProcessing ? 'disabled' : ''"
            ><slot
        /></span>
    </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<SubmitButtonProps>(), { processing: false })
interface SubmitButtonProps {
    processing?: boolean
}

const isProcessing = computed(() => props.processing === true)
</script>

<style lang="css" scoped>
.mw-submit-button {
    @apply relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
}

.mw-submit-button.disabled {
    @apply bg-slate-900;
}

.mw-submit-button .loader {
    @apply absolute inset-0 flex h-full w-full items-center justify-center;
}

.mw-submit-button .loader .icon {
    @apply h-5 w-5;
}

.mw-submit-button .text {
    @apply relative block;
}

.mw-submit-button .text.disabled {
    @apply invisible;
}
</style>
