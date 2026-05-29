<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="spinner-border text-primary" role="status" v-if="loading">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<style scoped></style>