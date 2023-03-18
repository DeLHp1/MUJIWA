<template>
    <UploadUserProfile :profile-picture="user.profile_picture_url" />
    <UploadUserBanner :profile-banner="user.banner_picture_url" />
</template>

<script lang="ts" setup>
import UploadUserProfile from '@/views/pages/settings/partials/ActionPanels/UploadUserProfile.vue'
import UploadUserBanner from '@/views/pages/settings/partials/ActionPanels/UploadUserBanner.vue'

const user = computed(() => usePage().props.user)
</script>

<script lang="ts">
import LayoutApp from '@/views/layouts/app/layoutApp.vue'
import LayoutSettings from '@/views/layouts/settings/layoutSettings.vue'
export default defineComponent({
    layout: (h, page) => {
        return h(LayoutApp, () => h(LayoutSettings, () => page))
    },
})
</script>
