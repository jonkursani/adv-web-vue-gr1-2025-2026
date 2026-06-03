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

    async function getById(id) {
        const response = await client.get(`/departments/${id}`)
        return response.status === 200 ? response.data : null
    }

    async function create(department) {
        const response = await client.post('/departments', department)
        return response.status === 201 ? response.data : null
    }

    async function update(id, department) {
        const response = await client.put(`/departments/${id}`, department)
        return response.status === 200 ? response.data : null
    }

    async function remove(id) {
        const response = await client.delete(`/departments/${id}`)
        // return response.status === 204 ? true : false
        return response.status === 204
    }

    return {
        departments,
        getAllDepartments,
        create,
        getById,
        update,
        remove
    }
}