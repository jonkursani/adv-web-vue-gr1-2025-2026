<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!--  v-bind="$attrs" - pass all attributes to the button -->
  <button type="button" disabled v-if="loading" v-bind="$attrs">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <slot />
  </button>
  <button v-else v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>

</style>