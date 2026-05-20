# Lesson 08 - Pinia State Management (new)

## What We learned (only new Pinia concepts)

This lesson documents the Pinia state-management additions in the project. Files to check:

- `src/main.js` — Pinia is registered via `createPinia()`
- `src/stores/counterStore.js` — example store implemented with `defineStore`
- `src/views/HomeView.vue` and `src/views/AboutView.vue` — show how to use the store in components

### Registering Pinia

Pinia is enabled at app startup in `src/main.js`:

```javascript
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia()) // register the Pinia store
  .mount('#app')
```

This makes stores available across the app and integrates with Vue Devtools.

### Defining a store (setup-style)

`src/stores/counterStore.js` demonstrates the setup-style `defineStore`:

```javascript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const message = ref('Hello, Pinia!')

  function increment() {
    count.value = count.value + 1
  }

  const doubleCount = computed(() => count.value * 2)

  return { count, message, increment, doubleCount }
})
```

Key points:
- The first argument (`'counter'`) is the store id.
- State is defined with `ref()` (or `reactive()`), actions are plain functions, getters are `computed()`.
- The store returns the pieces that components will use.

### Using a store in components

Import and call the store factory inside components (usually in `<script setup>`):

```javascript
import { useCounterStore } from '@/stores/counterStore'
const counterStore = useCounterStore()
```

In templates you can use store state, getters, and actions directly:

```vue
<p>Count: {{ counterStore.count }}</p>
<button @click="counterStore.increment">Increment</button>
<p>Double count: {{ counterStore.doubleCount }}</p>
```

Notes:
- Prefer calling actions to change state instead of mutating internal refs directly from templates (the project shows a comment recommending this).
- Store properties behave like reactive refs in templates (they are unwrapped automatically).

### Patterns and tips

- Setup-style stores (function second argument) are good when you want to use Composition API utilities (`ref`, `computed`) inside stores.
- You can also define stores with an options-style syntax (`state`, `getters`, `actions`) if you prefer a Vuex-like style.
- Stores are singletons: calling `useCounterStore()` from multiple components returns the same store instance.
- Pinia integrates with Vue Devtools automatically when registered with `createPinia()`.

### Example usages in this project

- `src/views/HomeView.vue` and `src/views/AboutView.vue` both import `useCounterStore` and display `count`, `message`, and `doubleCount`, and call the `increment` action.