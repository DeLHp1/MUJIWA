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
                :type="isVisible"
                :placeholder="placeholder"
                :required="required"
                :value="modelValue"
                class="input"
                @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
            <button
                type="button"
                class="show"
                @click="toggleVisiblity">
                <EyeSlashIcon
                    v-if="visiblity"
                    class="icon" />
                <EyeIcon
                    v-else
                    class="icon" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import generateID from '@/scripts/utils/generateID'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/20/solid'

const props = withDefaults(defineProps<InputPasswordProps>(), {
    type: 'password',
    modelValue: '',
    placeholder: null,
})

const emit = defineEmits<InputPasswordEmits>()

type InputPasswordType = 'text' | 'password' | 'current-password'

interface InputPasswordEmits {
    (event: 'update:modelValue', payload: string): void
}
interface InputPasswordProps {
    label: string
    name: string
    type?: InputPasswordType
    required?: boolean
    placeholder?: string | null
    modelValue?: string
}

const visiblity = ref<boolean>(false)

const toggleVisiblity = () => {
    visiblity.value = !visiblity.value
}

const isVisible = computed(() => (visiblity.value === true ? 'text' : props.type))

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

.mw-field .mw-container .show {
    @apply relative cursor-pointer rounded-md p-1 focus:border-blue-500 focus:ring-blue-500;
}

.mw-field .mw-container .show .icon {
    @apply h-5 w-5 text-slate-500;
}
</style>
