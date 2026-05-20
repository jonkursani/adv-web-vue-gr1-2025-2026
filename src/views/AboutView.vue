<script setup>
import AppCard from '@/components/ui/AppCard.vue';
import { useCounterStore } from '@/stores/counterStore';

const counterStore = useCounterStore()
</script>

<template>
    <AppCard>
        <template #header>
            <h4>About</h4>
        </template>

        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
        </ul>

        <hr>

        <p>Count: {{ counterStore.count }}</p>
        <button @click="counterStore.increment">Increment</button>
        <p>Double count: {{ counterStore.doubleCount }}</p>

    </AppCard>
</template>

<style scoped></style>