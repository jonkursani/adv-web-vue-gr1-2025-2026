<script setup>
import { computed, ref } from 'vue';

const userInput = ref('') // { value: '' }
const isVisible = ref(true) // { value: true }
const paragraphClasses = computed(() => {
    return {
        user1: userInput.value.toLowerCase() === 'user1',
        user2: userInput.value.toLowerCase() === 'user2',
        // visible: isVisible.value === true,
        visible: isVisible.value,
        hidden: !isVisible.value
    }
})

const onTypeClass = (e) => {
    userInput.value = e.target.value
}

const styleInput = ref('')
const onTypeStyle = (e) => {
    styleInput.value = e.target.value
}
</script>

<template>
    <fieldset>
        <legend>Detyra Vue Styling</legend>

        <h3>Vue Styling</h3>

        <div>
            <!-- 1) Fetch the user input and use it as a CSS class -->
            <!-- The entered class should be added to the below paragraph -->
            <input type="text" placeholder="user1, user2" @keyup.enter="onTypeClass" />
            <!-- (available classes: "user1", "user2") -->
            <!-- <p :class="{
                user1: userInput.toLowerCase() === 'user1',
                user2: userInput.toLowerCase() === 'user2',
                // visible: isVisible === true,
                visible: isVisible,
                // hidden: isVisible === false
                hidden: !isVisible
            }"> -->
            <p :class="paragraphClasses">Style me!</p>
            <button @click="isVisible = !isVisible">Toggle Paragraph</button>
            <br />
            <br />

            <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
            <!-- Clicking the button should toggle between the two options -->

            <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
            <input type="text" placeholder="Write background color name ex: red, green" @keyup.enter="onTypeStyle" />
            <p :style="{ backgroundColor: styleInput }">Style me inline!</p>
        </div>
    </fieldset>
</template>


<style scoped>
.user1 {
    background-color: blue;
    color: white;
}

.user2 {
    background-color: purple;
    color: white;
}

.hidden {
    display: none;
}

.visible {
    display: block;
}
</style>