import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    // state - reactive data
    const count = ref(0) // { value: 0 }
    const message = ref('Hello, Pinia!')

    // actions - functions that modify the state
    function increment() {
        // count.value++
        count.value = count.value + 1
    }

    // getters - computed properties based on the state
    const doubleCount = computed(() => count.value * 2)

    // return the state, actions, and getters to be used in components
    return {
        count,
        message,
        increment,
        doubleCount
    }
})