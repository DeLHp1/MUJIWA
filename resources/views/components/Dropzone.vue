<template>
    <div
        class="mw-dropzone"
        :class="isActive"
        role="presentation"
        tabindex="1">
        <input
            ref="inputRef"
            class="input"
            type="file"
            tabindex="-1"
            :multiple="multiple"
            @change="changeFiles" />
        <button
            class="zone-container"
            @click.prevent="browse"
            @drop.prevent="dropFile"
            @dragenter.prevent="dragEnter"
            @dragover.prevent="dragOver"
            @dragleave.prevent="dragLeave"
            @dragend.prevent="dragEnd">
            <div class="zone">
                <div
                    v-show="icon"
                    class="icon"
                    :class="iconClass">
                    <component
                        :is="icon"
                        v-if="icon"
                        class="h-full w-full" />
                </div>
                <div
                    class="primary-text"
                    :class="primaryTextClass">
                    <slot name="primary-text">
                        <h1>Hoď do pole nějaký soubor nebo otevři vyhledávač</h1>
                    </slot>
                </div>
                <div
                    class="secondary-text"
                    :class="secondaryTextClass">
                    <slot name="secondary-text">
                        <span class="block">Povolené formáty: WEBP, JPEG, PNG, JPG</span>
                    </slot>
                </div>
            </div>
        </button>
    </div>
</template>

<script lang="ts" setup>
//Imports
import { Component as ComponentDefinition } from 'vue'

//Define props
const props = withDefaults(defineProps<DropzoneProps>(), {
    multiple: false,
    icon: null,
    iconClass: '',
    primaryTextClass: '',
    secondaryTextClass: '',
    activeClass: '',
})

//Define emits
const emit = defineEmits<DropzoneEmits>()

//Refs Variables
const inputRef = ref<HTMLInputElement>()
const activeDropzone = ref<boolean>(false)

//Computed Values
const isActive = computed(() => (activeDropzone.value === true ? props.activeClass : ''))

//Functions
const browse = () => {
    inputRef.value.click()
}

const changeFiles = () => {
    const files: File | Array<File> = props.multiple ? Array.from(inputRef.value.files) : inputRef.value.files[0]
    emit('input', files)
}

const dragOver = () => {
    activeDropzone.value = true
}

const dragEnd = () => {
    activeDropzone.value = false
}

const dragLeave = () => {
    activeDropzone.value = false
}

const dragEnter = () => {
    activeDropzone.value = true
}

const dropFile = (ev: DragEvent) => {
    let files: File | Array<File> = props.multiple ? Array.from(ev.dataTransfer.files) : ev.dataTransfer.files[0]
    emit('input', files)
}

//Interfaces
interface DropzoneProps {
    icon?: ComponentDefinition
    multiple?: boolean

    primaryTextClass?: string

    secondaryTextClass?: string

    iconClass?: string

    activeClass?: string
}

interface DropzoneEmits {
    (event: 'input', payload: File | Array<File>): void
}
</script>

<style lang="css" scoped>
.mw-dropzone {
    @apply relative rounded-md border-2 border-dashed transition;
}

.mw-dropzone .input {
    @apply hidden;
}

.mw-dropzone .zone-container {
    @apply h-full w-full;
}

.mw-dropzone .zone {
    @apply flex w-full flex-col items-center justify-center p-4;
}

.mw-dropzone .zone .icon {
    @apply h-10 w-10;
}

.mw-dropzone .zone .primary-text {
    @apply font-medium leading-7 tracking-tight;
}

.mw-dropzone .zone .secondary-text {
    @apply text-sm font-normal leading-5;
}
</style>
