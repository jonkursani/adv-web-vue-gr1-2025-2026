export default [
    {
        path: '/employees',
        name: 'employees',
        component: () => import('@/views/employee/EmployeesView.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/employees/add',
        name: 'create-employee',
        component: () => import('@/views/employee/CreateEmployeeView.vue'),
        meta: {requiresAuth: true}
    }
]