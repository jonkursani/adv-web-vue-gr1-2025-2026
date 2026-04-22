<!-- SFC - Single File Component -->

<!-- script - Logic JS -->
<script setup>
import { ref } from 'vue';

// const text = document.getElementById('text');
// text.innerHTML = 'You did it!';

const msg = ref('You did it!'); // { value: 'You did it!' }
const url = ref('https://vuejs.org/');
const isBtnDisabled = ref(true);
const id = ref(2);

function reverseMsg() {
  console.log(msg);
  console.log(msg.value);
  
  // msg.value perdoret kur jeni ne pjesen e script
  // msg ne template skeni nevoje me e perdor .value 
  // sepse template e kupton qe eshte ref dhe e merr vleren e saj
  return msg.value.split('').reverse().join('');
}

const seen = ref(true);

function toggleText() {
  // seen // { value: true }
  seen.value = !seen.value;
}

const seenText = ref('Now you see me');
function changeText(newText) {
  seenText.value = newText;
}

const confirmedName = ref('');
function confirmName(event) {
  // event.target - elementi qe ka shkaktuar eventin
  // if (event.key === 'Enter') {}
  confirmedName.value = event.target.value;
}

function onSubmit() {
  // event.preventDefault(); // parandalon behavior default te form
  alert('Form submitted!');
}
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

  <!-- JavaScript expressions -->
  <p>{{ 1 + 1 }}</p> 

  <p>{{ msg.split('').reverse().join('') }}</p>

  <p>{{ isBtnDisabled ? 'Button is disabled' : 'Button is enabled' }}</p>

  <p :id="`emp-${id}`">Employee #{{ id }}</p>

  <p>{{ reverseMsg() }}</p>

  <!--
    Directives - special attributes with the v- prefix that tell Vue to do something to a DOM element
    v-if, v-else-if, v-else, v-bind, v-on
  -->

  <p v-if="seen">{{ seenText }}</p>
  <p v-else>Now you don't</p>

  <!-- <button v-on:click="">Hide text</button> -->
  <!-- <button @click="seen = !seen">{{ seen ? 'Hide' : 'Show' }} text</button> -->
  <button @click="toggleText">{{ seen ? 'Hide' : 'Show' }} text</button>
  <button @click="changeText('Yeyyy we learned Vue!')">Change Text</button>

  <!-- Event modifiers - .prevent, .stop, .enter -->
  <div>
    <input type="text" placeholder="Enter name..." @keyup.enter="confirmName">
    <p>Confimed name {{ confirmedName }}</p>
  </div>

  <form @submit.prevent="onSubmit">
    <p>This is a form</p>
    <button>Submit</button>
  </form>
</template>

<!-- style - CSS -->
<style scoped></style>