<script setup>
import DepartmentForm from "@/components/department/DepartmentForm.vue";
import {useDepartmentService} from "@/composables/useDepartmentService.js";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAppToast} from "@/composables/useAppToast.js";
import AppSpinner from "@/components/ui/AppSpinner.vue";

const {getById, update} = useDepartmentService()
const {showError, showSuccess} = useAppToast()
const loading = ref(false)
const router = useRouter()
const route = useRoute()
const departmentId = route.params.id
const department = ref(null)

async function loadDepartment() {
  try {
    loading.value = true
    const response = await getById(departmentId)
    if (response) {
      department.value = response
    }
  } catch (e) {
    showError('Departamenti nuk u gjet. Provoni perseri!')
    await router.push({name: 'departments'})
  } finally {
    loading.value = false
  }
}

async function saveDepartment(departmentObj) {
  try {
    loading.value = true
    const response = await update(departmentId, departmentObj)
    if (response) {
      showSuccess('Departamenti u perditesua me sukses')
      await router.push({name: 'departments'})
    }
  } catch (e) {
    showError('Ndodhi nje gabim gjate perditesimit te departamentit. Ju lutem provoni përsëri.')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await loadDepartment()
})
</script>

<template>
  <div class="text-center" v-if="loading">
    <AppSpinner :loading />
  </div>
  <DepartmentForm
      v-else
      is-edit
      :department="department"
      @save-department="saveDepartment"
  />
</template>

<style scoped></style>