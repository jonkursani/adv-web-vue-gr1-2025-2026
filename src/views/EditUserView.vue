<script setup>
import UserForm from '@/UserForm.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()

// permban informata per routen ex: query params, path params
const route = useRoute()
const userId = route.params.id
function loadUser(id) {
    // try catch
    // nese nuk e gjen userin
    // redirect userin te home (lista e userave)
    router.push({ name: 'home' })
}
</script>

<template>
    <!-- $route - permban informata per routen ex: query params, path params -->
    <!-- <h1>User id: {{ $route.params.id }}</h1> -->
    <h1>User id: {{ userId }}</h1>
    <UserForm is-edit />
    <button @click="$router.go(-1)">Go back</button>
</template>

<style scoped></style>