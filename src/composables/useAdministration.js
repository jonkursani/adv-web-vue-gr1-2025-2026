import {useAuthStore} from "@/stores/authStore.js";
import {computed} from "vue";

export const ROLES = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER'
}

export function useAdministration() {
    const authStore = useAuthStore()

    const isAdmin = computed(() => authStore.loggedInUser?.role === ROLES.ADMIN)
    const isManager = computed(() => authStore.loggedInUser?.role === ROLES.MANAGER)
    const isUser = computed(() => authStore.loggedInUser?.role === ROLES.USER)

    return {
        isAdmin,
        isManager,
        isUser
    }
}