<script setup>
import { reactive } from 'vue';

const user = reactive({
    name: '',
    email: '',
    isActive: true
})

const props = defineProps({
    isEdit: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['onSubmit']);
function handleSubmit() {
    const userToSubmit = {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    }

    emit('onSubmit', userToSubmit);
}
</script>

<template> 
    <!-- <h1>User Form</h1> -->
    <h1>{{ isEdit ? 'Edit User' : 'Add User' }}</h1>

    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Enter your name" v-model="user.name" />
        <br>
        <input type="text" placeholder="Enter your email" v-model="user.email" />
        <br>
        <div v-if="isEdit">
            <input type="checkbox" id="active" v-model="user.isActive" />
            <label for="active">Active</label>
        </div>
        <button>Submit</button>
    </form>
</template>

<style scoped></style>