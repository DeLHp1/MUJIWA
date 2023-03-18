<template>
    <div class="mw-field">
        <label
            :for="getID"
            class="label"
            >{{ label }}</label
        >
        <div class="mw-container">
            <input
                :id="getID"
                :type="type"
                :placeholder="placeholder"
                :required="required"
                class="input"
                :value="modelValue"
                :disabled="disabled"
                @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import generateID from '@/scripts/utils/generateID'

const props = withDefaults(defineProps<InputTextProps>(), {
    type: 'text',
    modelValue: '',
    placeholder: null,
    disabled: false,
})

const emit = defineEmits<InputTextEmits>()

type InputTextType = 'text' | 'email'

interface InputTextEmits {
    (event: 'update:modelValue', payload: string): void
}
interface InputTextProps {
    label: string
    name: string
    type?: InputTextType
    required?: boolean
    placeholder?: string | null
    modelValue?: string
    disabled?: boolean
}

const getID = computed(() => generateID(`mw-field-${props.type}`))
</script>
<style lang="css" scoped>
.mw-field {
    @apply rounded-md border border-slate-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600;
}

.mw-field .label {
    @apply block text-xs font-medium text-slate-900;
}

.mw-field .mw-container {
    @apply flex items-center;
}

.mw-field .mw-container .input {
    @apply w-full flex-1 border-0 p-0 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-0 sm:text-sm;
}
</style>
