import {ref} from "vue";
import client from "@/helpers/client.js";

export function useEmployeeService() {
    const employees = ref([])

    async function getAll() {
        const response = await client.get('/employees')
        if (response.status === 200) {
            employees.value = response.data
        }
    }

    async function create(empObj) {
        const response = await client.post('/employees', empObj)
        return response.status === 201 ? response.data : null
    }

    return {
        employees,
        getAll,
        create
    }
}