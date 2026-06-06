<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import AppButton from "@/components/ui/AppButton.vue";
import {useDepartmentService} from "@/composables/useDepartmentService.js";
import {onMounted, ref} from "vue";
import AppSpinner from "@/components/ui/AppSpinner.vue";
import {useAppToast} from "@/composables/useAppToast.js";
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import DataTablesBS5 from 'datatables.net-bs5';
import {useEmployeeService} from "@/composables/useEmployeeService.js";
import {useAdministration} from "@/composables/useAdministration.js";

// Initialize DataTables with Bootstrap 5 styles
DataTable.use(DataTablesCore);
DataTable.use(DataTablesBS5);

const loading = ref(false)
const {employees, getAll} = useEmployeeService()
const {showError, showDialog, showSuccess} = useAppToast()
const {isAdmin} = useAdministration()

async function loadEmployees() {
  try {
    loading.value = true
    await getAll()
  } catch (e) {
    showError('Punetoret nuk u gjeten. Provoni perseri!')
  } finally {
    loading.value = false
  }
}

async function onDelete(id) {
  const dialog = await showDialog(
      "A jeni i sigurte?",
      "Ky veprim nuk mund te kthehet!",
      "Po, fshije"
  )

  if (dialog.isConfirmed) {
    try {
      loading.value = true
      // const response = await remove(id)
      // if (response) {
      //   showSuccess('Departamenti u fshij me sukses')
      //   await loadEmployees()
      // }
    } catch (e) {
      showError('Ka ndodhur nje gabim gjate fshirjes. Ju lutem provoni perseri.')
    } finally {
      loading.value = false
    }
  }
}

// life cycle method
onMounted(async () => {
  await loadEmployees()
  new DataTablesCore('#employeesTable')
})
</script>

<template>
  <Transition appear>
    <AppCard>
      <template #header>
        <!--      <h4>Departamentet</h4>-->
        <div class="d-flex justify-content-between">
          <h4>Punetoret</h4>
          <RouterLink
              :to="{ name: 'create-employee' }"
              class="btn btn-primary"
          >
            Shto
          </RouterLink>
        </div>
      </template>

      <!--    <div class="spinner-border text-primary" role="status" v-if="loading">-->
      <!--      <span class="visually-hidden">Loading...</span>-->
      <!--    </div>-->
      <div class="text-center" v-if="loading">
        <AppSpinner :loading="loading"/>
      </div>
      <table class="table table-striped table-bordered" id="employeesTable" v-else>
        <thead>
        <tr>
          <th>#</th>
          <th>Emri</th>
          <th>Mbiemri</th>
          <th>Departamenti</th>
          <th>Data e punesimit</th>
          <th>Email</th>
          <th>Opsionet</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="emp in employees" :key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.firstName }}</td>
          <td>{{ emp.lastName }}</td>
          <td>{{ emp.department.name }}</td>
          <td>{{ emp.hireDate }}</td>
          <td>{{ emp.email }}</td>
          <td>
            <RouterLink
                class="btn btn-secondary"
                :to="{name: '', params: {id: emp.id}}"
            >
              Perditeso
            </RouterLink>
            <AppButton class="btn btn-danger ms-2" @click="onDelete(emp.id)" v-if="isAdmin">
              Fshij
            </AppButton>
          </td>
        </tr>
        </tbody>
      </table>
    </AppCard>
  </Transition>
</template>

<style scoped></style>