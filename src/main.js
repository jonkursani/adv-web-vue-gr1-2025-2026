import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'

createApp(App)
// .component('MyComponent', MyComponent) // importimi global i komponentes
.mount('#app')
