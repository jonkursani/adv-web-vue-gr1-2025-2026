export default [
    {
        path: '/departments',
        name: 'departments',
        component: () => import('@/views/department/DepartmentsView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/departments/add',
        name: 'create-department',
        component: () => import('@/views/department/CreateDepartmentView.vue'),
        meta: { requiresAuth: true }
    }
]