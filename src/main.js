import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import './assets/app.css'
import './assets/styles.css'

createApp(App)
.use(router) // importimi i routerit
.use(createPinia()) // importimi i store-it
// .component('MyComponent', MyComponent) // importimi global i komponentes
.mount('#app')
