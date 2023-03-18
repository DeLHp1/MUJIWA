<template>
    <div class="rounded-md bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-base font-medium leading-7 tracking-tight text-slate-900 sm:text-lg">
                    Nahrát profilovou fotku
                </h1>
                <p class="text-xs font-normal leading-5 text-slate-600 sm:text-sm">
                    Zde můžete si nahrát vlastní profilou fotku na váš účet, podporované formáty jsou WEBP, JPG, JPEG,
                    PNG, GIF a je povoleno uploadovat fotky o velikosti 3MB, doporučené rozlišení je 512x512 pixelu.
                </p>
                <TransitionRoot
                    as="template"
                    :show="!!form.errors.profilePicture"
                    enter="transition duration-750 ease-in"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition duration-500 ease-out"
                    leave-from="opacity-100"
                    leave-to="opacity-0">
                    <div class="rounded-md bg-red-50 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <XCircleIcon class="h-5 w-5 text-red-400" />
                            </div>
                            <div class="ml-3">
                                <span class="block text-red-500">{{ form.errors.profilePicture }}</span>
                            </div>
                        </div>
                    </div>
                </TransitionRoot>
                <div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-[128px,1fr]">
                    <div class="relative">
                        <img
                            :src="profilePicture"
                            alt="Profilová fotka"
                            class="h-32 w-32 rounded-md object-cover object-center" />
                    </div>
                    <Dropzone
                        :icon="PhotoIcon"
                        active-class="border-blue-500"
                        icon-class="text-blue-300"
                        primary-text-class="text-slate-900"
                        secondary-text-class="text-slate-500"
                        @input="filesChanged">
                        <template #primary-text>
                            <h1>Fotku jsem přesun nebo nahraj kliknutím</h1>
                        </template>
                        <template #secondary-text> Povolené formáty: WEBP, JPEG, JPG, PNG, GIF </template>
                    </Dropzone>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
//imports
import { PhotoIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import { TransitionRoot } from '@headlessui/vue'

//Define Props
const props = defineProps<UploadUserProfileProps>()

//Functions
const filesChanged = (file: File) => {
    if (!file) return

    form.profilePicture = file

    form.post(route('settings.profile.pfp.update'), { preserveScroll: true })
}

//form inertia
const form = useForm({ profilePicture: null })

//Interfaces
interface UploadUserProfileProps {
    profilePicture: string
}
</script>
