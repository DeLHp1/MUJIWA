<template>
    <TransitionRoot
        appear
        :show="isVisible"
        as="template"
        enter="transform transition duration-[400ms]"
        enter-from="opacity-0 scale-50 translate-y-5 "
        enter-to="opacity-100 rotate-0 translate-y-0  scale-100"
        leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 translate-y-0 scale-100 "
        leave-to="opacity-0 translate-y-5  scale-95">
        <div class="mb-4 rounded-md bg-red-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <XCircleIcon
                        class="h-5 w-5 text-red-400"
                        aria-hidden="true" />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">Nastala chyba při validaci</h3>
                    <div class="mt-2 text-sm text-red-700">
                        <ul
                            role="list"
                            class="list-disc space-y-1 pl-5">
                            <li
                                v-for="error in errors"
                                :key="error">
                                {{ error }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import { XCircleIcon } from '@heroicons/vue/20/solid'
import generateID from '@/scripts/utils/generateID'
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps<Props>()

const isVisible = computed(() => Object.keys(props.errors).length !== 0)

const getID = computed(() => generateID())
interface Props {
    errors: Partial<Record<any, string>>
}
</script>

<style lang="css"></style>
