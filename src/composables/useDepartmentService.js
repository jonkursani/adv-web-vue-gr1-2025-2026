import {ref} from "vue";
import client from "@/helpers/client.js";

// composable
export function useDepartmentService() {
    const departments = ref([]) // { value: [] }

    async function getAllDepartments() {
        const response = await client.get('/departments')
        // console.log(response) // { status: 200, data: [], ... }
        if (response.status === 200) {
            departments.value = response.data
        }
    }

    return {
        departments,
        getAllDepartments
    }
}