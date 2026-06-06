<script setup>
import EmployeeForm from "@/components/employee/EmployeeForm.vue";
import {ref} from "vue";
import {useAppToast} from "@/composables/useAppToast.js";
import {useRouter} from "vue-router";
import {useEmployeeService} from "@/composables/useEmployeeService.js";

const loading = ref(false)
const {showError, showSuccess} = useAppToast()
const router = useRouter()
const {create} = useEmployeeService()

async function saveEmployee(empObj) {
  try {
    loading.value = true
    const response = await create(empObj)
    if (response) {
      showSuccess('Punetori u shtua me sukses')
      await router.push({name: 'employees'})
    }
  } catch (e) {
    showError(e.response.data.message || 'Ka ndodhur nje gabim gjate shtimit. Ju lutem provoni perseri.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Transition appear>
    <EmployeeForm :loading="loading" @save-employee="saveEmployee"/>
  </Transition>
</template>

<style scoped>

</style>