<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()


function goToUser(id) {
    // router.push('/users/' + id)
    router.push({ name: 'edit-user', params: { id: id } })
}

</script>

<template>
    <h1>Home</h1>

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
</template>

<style scoped></style>