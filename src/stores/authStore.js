import {defineStore} from "pinia";
import {computed, ref} from "vue";
import client from "@/helpers/client.js";
import {jwtDecode} from "jwt-decode";

export const useAuthStore = defineStore('auth', () => {
    // state
    const token = ref(localStorage.getItem('token') || null);

    // actions
    async function logIn(email, password) {
        const response = await client.post('/auth/login', { email, password })
        if (response.data.token) {
            token.value = response.data.token;
            localStorage.setItem('token', token.value)
        }
    }

    function logOut() {
        token.value = null
        localStorage.removeItem('token')
    }

    // getters
    const isAuthenticated = computed(() => {
        // return token.value !== null
        return !!token.value;
    })

    const loggedInUser = computed(() => {
        return token.value ? jwtDecode(token.value) : null
    })

    return {
        logIn,
        logOut,
        isAuthenticated,
        loggedInUser
    }
})