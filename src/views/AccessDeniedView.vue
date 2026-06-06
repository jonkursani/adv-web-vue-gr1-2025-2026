<script setup>

import AppCard from "@/components/ui/AppCard.vue";
</script>

<template>
  <AppCard>
    <template #header>
      <h5>Access Denied</h5>
    </template>

    <p>You do not have permission to access this page.</p>
    <RouterLink to="/">Go back to home</RouterLink>
  </AppCard>
</template>

<style scoped>

</style>