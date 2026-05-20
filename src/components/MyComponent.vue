<!-- SFC - Single File Component -->
<script setup>
import { ref } from 'vue';
// const props = defineProps(['title', 'content']);
// const props = defineProps({
//     title: String,
//     content: String,
//     views: Number
// });
// const props = defineProps({
//     title: {
//         type: String,
//         required: true
//     },
//     content: {
//         type: String,
//         required: true
//     },
//     views: {
//         type: Number,
//         default: 0
//     }
// })
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

// emits komunikimi prej komponentes child te komponenta parent
const emit = defineEmits(['onClickLike']);

const likeCount = ref(0);
function onLike() {
    likeCount.value++;
    emit('onClickLike', `Like count: ${likeCount.value}`);
}
</script>

<template>
    <!-- <h1>My Component</h1> -->
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Views: {{ post?.views }}</p>
    <button @click="onLike">Like</button>

    <!-- named slots -->
    <slot name="button" />

    <!-- placeholder per contentin qe na vjen nga parent -->
    <slot />
</template>

<style scoped></style>