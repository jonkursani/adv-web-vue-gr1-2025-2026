import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView 
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue') // lazy loading
    },
    {
        path: '/about-us',
        redirect: '/about'
    },
    {
        path: '/users/:id',
        name: 'edit-user',
        component: () => import('@/views/EditUserView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// global navigation guard
// ekzekutohet para se te ndodhe navigimi, mund te perdoret per te kontrolluar nese useri eshte i loguar, per te bere analytics, etj
router.beforeEach((to, from) => {
    console.log('Navigating from', from, 'to', to)
})

export default router;