<template>
    <div class="relative z-10">
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <Link :href="route('home')">
                            <Logo class="h-6 w-auto" />
                        </Link>
                    </div>
                </div>
                <div class="flex items-center">
                    <UserDropdown />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
