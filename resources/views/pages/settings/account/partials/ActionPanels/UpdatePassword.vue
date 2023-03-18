<template>
    <div class="rounded-md bg-white shadow">
        <div class="px-4 py-5 sm:p-6">
            <div class="flex flex-col justify-center gap-2">
                <h1 class="text-base font-medium leading-7 tracking-tight text-slate-900 sm:text-lg">Změna hesla</h1>
                <p class="text-xs font-normal leading-5 text-slate-600 sm:text-sm">
                    Zde máte možnost si změnit své heslo ke svému účtu MW.
                </p>
                <TransitionRoot
                    as="template"
                    :show="Object.entries(form.errors).length > 0"
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
                                <span class="block text-red-500">Nastala chyba při validaci</span>
                                <ul class="mt-2 ml-1 list-disc">
                                    <li
                                        v-for="error in form.errors"
                                        :key="error">
                                        <span class="block text-red-500"> {{ error }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TransitionRoot>
                <div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
                    <InputPassword
                        v-model="form.currentPassword"
                        class="md:col-span-6"
                        type="password"
                        label="Aktuální heslo"
                        name="currentPassword"
                        required />
                    <InputPassword
                        v-model="form.password"
                        class="md:col-span-3"
                        type="password"
                        label="Nové heslo"
                        name="newPassword"
                        required />
                    <InputPassword
                        v-model="form.password_confirmation"
                        class="md:col-span-3"
                        type="password"
                        label="Ověření"
                        name="password_current"
                        required />
                    <div class="flex items-center justify-end md:col-span-6">
                        <button
                            class="ml-3 inline-flex justify-center rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            type="submit"
                            @click.prevent="submit">
                            Uložit heslo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TransitionRoot } from '@headlessui/vue'
import { XCircleIcon } from '@heroicons/vue/20/solid'

const form = useForm({ currentPassword: '', password: '', password_confirmation: '' })

const submit = () =>
    form.post(route('settings.account.update.password'), {
        preserveScroll: true,
        onSuccess: () => {
            form.clearErrors()
            form.reset()
        },
    })
</script>
