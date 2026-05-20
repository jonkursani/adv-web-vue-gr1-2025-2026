<script setup>
import AppCard from '@/components/ui/AppCard.vue';
import { useCounterStore } from '@/stores/counterStore';
import { useRouter } from 'vue-router';

const router = useRouter()


function goToUser(id) {
    // router.push('/users/' + id)
    router.push({ name: 'edit-user', params: { id: id } })
}


// Store
const counterStore = useCounterStore()
</script>

<template>
    <AppCard>
        <template #header>
            <h4>Home</h4>
        </template>

        <!-- 
            RouterLink - Tagu qe perdoret per navigim 
            <a href=""></a>     
        -->
        <ul>
            <li>
                <!-- <RouterLink to="/about">About</RouterLink> -->
                <RouterLink :to="{ name: 'about' }">About</RouterLink>
            </li>
            <li>
                <!-- $router - na ndihmon ne navigim, perdoret vetem ne template -->
                <!-- <button @click="$router.push('/about')">Go to about</button> -->
                <button @click="$router.push({ name: 'about' })">
                    Go to about
                </button>
            </li>
            <li>
                <RouterLink to="/users/1">Edit User 1</RouterLink>
            </li>
            <li>
                <RouterLink :to="{ 
                    name: 'edit-user', 
                    params: { id: 2 }
                }">
                    Edit User 2
                </RouterLink>
            </li>
            <li>
                <button @click="goToUser(3)">Edit user 3</button>
            </li>
        </ul>

        <hr>

        <!-- Store -->
        <p>Count: {{ counterStore.count }}</p>
        <!-- nuk preferohet me e modifiku state variablen direkt -->
        <!-- <button @click="counterStore.count++">Increment</button> -->
        <button @click="counterStore.increment" class="btn btn-primary">Increment</button>
        <p>Double count: {{ counterStore.doubleCount }}</p>
        <p>Message: {{ counterStore.message }}</p>
    </AppCard>
</template>

<style scoped></style>