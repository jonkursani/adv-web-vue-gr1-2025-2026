<script setup>
import TheLayout from './components/ui/TheLayout.vue';
import AuthView from "@/views/auth/AuthView.vue";
import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore()
</script>

<template>
  <!-- <h1>App</h1> -->

  <!-- per me i renderu views -->
  <!-- <RouterView /> -->

  <AuthView v-if="!authStore.isAuthenticated" />
  <TheLayout v-else />
</template>

<style scoped>
</style>