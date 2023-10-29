<template>
  <div class="page">
    <uiSidebar />
    <div class="page__wrapper">
      <uiHeader />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import uiSidebar from '@/components/pages/ui-sidebar.vue'
import uiHeader from '@/components/pages/ui-header.vue'

</script>

<style scoped lang="scss">
.page {
  width: 100%;
  display: flex;
  min-height: 100vh;
}
.page__wrapper {
  flex: 1;
  overflow: hidden;
}
</style>
