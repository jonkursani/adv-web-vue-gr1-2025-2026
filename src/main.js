import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './MyComponent.vue'
import router from './router'

createApp(App)
.use(router) // importimi i routerit
// .component('MyComponent', MyComponent) // importimi global i komponentes
.mount('#app')
