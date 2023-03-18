<template>
    <UpdateEmail />
    <UpdatePassword />
</template>

<script lang="ts" setup>
import UpdateEmail from '@/views/pages/settings/account/partials/ActionPanels/UpdateEmail.vue'
import UpdatePassword from '@/views/pages/settings/account/partials/ActionPanels/UpdatePassword.vue'
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
