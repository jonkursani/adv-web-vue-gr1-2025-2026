<!-- SFC - Single File Component -->

<!-- script - Logic JS -->
<script setup>
import { reactive, ref, computed } from 'vue';

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

// Reactivity (ref, reactive)
const count = ref(0); // { value: 0 }
function decrement(num) {
  // count.value = count.value - num;
  count.value -= num;
}

const increment = (num) => {
  count.value += num;
}

// ref pranon edhe objekte dhe arrays
const userRef = ref({
  name: 'John',
  age: 30
});

// userRef.value.name = 'Jane';

// reactive - ne pjesen e script skeni nevoje me perdor .value
// reactive - pranon vetem tipe reference (objekte, arrays)
// const userName = reactive('John'); // error, reactive nuk pranon tipe primitive
const user = reactive({ // { name: 'John', age: 30 }
  name: 'John',
  age: 30
})

// nuk ki nevoje me e perdor .value
// user.name = 'Jane';
const state = reactive({ // { count: 0 }
  count: 0
})

function incrementReactive() {
  state.count++;
}

// Computed properties computed(() => {})
const author = reactive({
  name: 'John Doe',
  books: ['Book 1', 'Book 2', 'Book 3']
})

const hasPublishedBooks = computed(() => {
  return author.books.length > 0 ? 'has published books' : 'has not published books';
})

const fullName = computed(() => {
  return user.name + ' - Last Name'; 
})

// Class binding
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
  active: false,
  'text-danger': true
})

const isCompleted = ref(true);
const classObjComputed = computed(() => {
  return {
    completed: isCompleted.value,
    'text-danger': !isCompleted.value // && hasError.value
  }
}) 
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

  <!-- Reactivity -->
   <!-- count.value // error ne template -->
  <button @click="count--">-</button>
  <button @click="decrement(5)">-5</button>
  <span>Count: {{ count }}</span>
  <button @click="count++">+</button>
  <button @click="increment(10)">+10</button>

  <p>User name: {{ userRef.name }}</p>
  <p>User age: {{ user.age }}</p>

  <button @click="state.count--">-</button>
  <span>Count reactive: {{ state.count }}</span>
  <button @click="incrementReactive">+</button>

  <!-- Computed properties -->
  <p>
    Author: {{ author.name }} 
    <!-- {{ author.books.length > 0 ? 'has published books' : 'has not published books' }} -->
    <!-- Property nuk ki nevoje me ja vendos kllapat hasPublishedBooks() // error -->
    {{ hasPublishedBooks }} 
    {{ author.books.length }}
  </p>

  <p>Full name: {{ fullName }}</p>

  <!-- Class binding -->
  <!-- Vendosja klasen e css active kur variabla isActive eshte true -->
  <p 
    class="klasa-statike"
    :class="{ active: isActive, 'text-danger': hasError }"
  >
    Class binding example
  </p>

  <p :class="classObject">Class object example</p>

  <!-- :class="{ completed: isCompleted, 'text-danger': !isCompleted }" -->
  <p :class="classObjComputed">
    Computed class object example
    <button @click="isCompleted = !isCompleted">Toggle completed</button>
  </p>
</template>

<!-- style - CSS -->
<!-- scoped - style only applies to this component -->
<style scoped>
.active {
  font-weight: bold;
}

.text-danger {
  color: red;
}

.completed {
  text-decoration: line-through;
  color: green;
}
</style>