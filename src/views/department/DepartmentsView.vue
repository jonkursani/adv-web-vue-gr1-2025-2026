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

// Initialize DataTables with Bootstrap 5 styles
DataTable.use(DataTablesCore);
DataTable.use(DataTablesBS5);

const loading = ref(false)
const {departments, getAllDepartments} = useDepartmentService()
const {showError} = useAppToast()

async function loadDepartments() {
  try {
    loading.value = true
    await getAllDepartments()
  } catch (e) {
    showError('Departamentet nuk u gjeten. Provoni perseri!')
  } finally {
    loading.value = false
  }
}

// life cycle method
onMounted(async () => {
  await loadDepartments()
  new DataTablesCore('#departmentsTable')
})
</script>

<template>
  <AppCard>
    <template #header>
<!--      <h4>Departamentet</h4>-->
      <div class="d-flex justify-content-between">
        <h4>Departamentet</h4>
        <RouterLink
            :to="{ name: 'create-department' }"
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
      <AppSpinner :loading="loading" />
    </div>
    <table class="table table-striped table-bordered" id="departmentsTable" v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>Emri</th>
          <th>Lokacioni</th>
          <th>Opsionet</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departments" :key="dep.id">
          <td>{{ dep.id }}</td>
          <td>{{ dep.name }}</td>
          <td>{{ dep.location }}</td>
          <td>
            <RouterLink class="btn btn-secondary" to="">Perditeso</RouterLink>
            <AppButton class="btn btn-danger ms-2">Fshij</AppButton>
          </td>
        </tr>
      </tbody>
    </table>
  </AppCard>
</template>

<style scoped></style>