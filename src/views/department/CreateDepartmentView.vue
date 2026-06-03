<script setup>
import DepartmentForm from "@/components/department/DepartmentForm.vue";
import {useDepartmentService} from "@/composables/useDepartmentService.js";
import {useAppToast} from "@/composables/useAppToast.js";
import {useRouter} from "vue-router";
import {ref} from "vue";

const {create} = useDepartmentService()
const {showSuccess, showError} = useAppToast()
const router = useRouter()
const loading = ref(false)
async function onSaveDepartment(childData) {
  // console.log('Dep:', department)
  try {
    loading.value = true
    const response = await create(childData)
    if (response) {
      showSuccess('Departamenti u shtua me sukses')
      await router.push({name: 'departments'})
    }
  } catch (error) {
    showError('Ndodhi nje gabim gjate shtimit te departamentit. Ju lutem provoni përsëri.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <DepartmentForm :loading="loading" @save-department="onSaveDepartment" />
</template>

<style scoped>

</style>