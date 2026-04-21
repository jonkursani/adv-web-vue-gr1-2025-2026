<!-- SFC - Single File Component -->

<!-- script - Logic JS -->
<script setup>
import { ref } from 'vue';

// const text = document.getElementById('text');
// text.innerHTML = 'You did it!';

const msg = ref('You did it!');
const url = ref('https://vuejs.org/');
const isBtnDisabled = ref(true);
</script>

<!-- template - HTML -->
<template>
  <!-- Template syntax - {{  }} -->
  <!-- <h1 id="text">You did it!</h1> -->
  <h1>{{ msg }}</h1>

  <!-- 
      Attribute binding - bind an attribute to an expression (JS)
      v-bind:href="url" or :href="url" 
  -->
  <p>
    Visit <a :href="url" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <button :disabled="isBtnDisabled">Button</button>
</template>

<!-- style - CSS -->
<style scoped></style>