import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router"
import {useAuthStore} from "@/stores/authStore.js";
import departmentRoutes from "@/router/departmentRoutes.js";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/AuthView.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'), // lazy loading
        meta: { requiresAuth: true }
    },
    {
        path: '/about-us',
        redirect: '/about',
        meta: { requiresAuth: true }
    },
    {
        path: '/users/:id',
        name: 'edit-user',
        component: () => import('@/views/EditUserView.vue'),
        meta: { requiresAuth: true }
    },
    ...departmentRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// global navigation guard
// ekzekutohet para se te ndodhe navigimi, mund te perdoret per te kontrolluar nese useri eshte i loguar, per te bere analytics, etj
router.beforeEach((to, from) => {
    // console.log('Navigating from', from, 'to', to)

    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return {
            name: 'login',
            query: { redirect: to.fullPath }
        }
    } else if (to.name === 'login' && authStore.isAuthenticated) {
        return {
            name: 'home'
        }
    }
})

export default router;