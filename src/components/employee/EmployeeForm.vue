<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import AppButton from "@/components/ui/AppButton.vue";
import AppInput from "@/components/ui/AppInput.vue";
import {useDepartmentService} from "@/composables/useDepartmentService.js";

const props = defineProps({
  isEdit: {type: Boolean, default: false},
  loading: {type: Boolean, default: false},
  employee: {type: Object, default: null}
})

const formData = reactive({
  firstName: {val: '', isValid: true},
  lastName: {val: '', isValid: true},
  department: {val: '', isValid: true},
  hireDate: '',
  email: {val: '', isValid: true}
})

// validimi
const isFormValid = ref(true)
function validateForm() {
  isFormValid.value = true

  // if (formData.name.val === '' || formData.name.val === null)
  if (!formData.firstName.val) {
    formData.firstName.isValid = false
    isFormValid.value = false
  }

  if (!formData.lastName.val) {
    formData.lastName.isValid = false
    isFormValid.value = false
  }

  if (!formData.department.val) {
    formData.department.isValid = false
    isFormValid.value = false
  }

  if (!formData.email.val) {
    formData.email.isValid = false
    isFormValid.value = false
  }
}

function clearValidity(key) {
  // formData.key
  // formData['name'].isValid = true
  formData[key].isValid = true
}

const {departments, getAllDepartments} = useDepartmentService()
async function loadDepartments() {
  try {
    await getAllDepartments()
  } catch (e) {
    console.log(e)
  }
}
const departmentsForDropdown = computed(() => {
  return departments.value.map(dep => {
    return {
      value: dep.id,
      text: dep.name
    }
  })
})

const emit = defineEmits(['saveEmployee'])
function handleSubmit() {
  validateForm()

  if (!isFormValid.value) {
    return
  }

  emit('saveEmployee', {
    firstName: formData.firstName.val,
    lastName: formData.lastName.val,
    departmentId: formData.department.val,
    hireDate: formData.hireDate,
    email: formData.email.val
  })
}

// watch(() => props.employee, (dep) => {
//   if (!dep) {
//     return
//   }
//
//   formData.name.val = dep.name
//   formData.location = dep.location
//   formData.name.isValid = true
// }, {immediate: true})

onMounted(async () => {
  await loadDepartments()
})
</script>

<template>
  <AppCard>
    <template #header>
      <h5>
        {{ isEdit ? 'Perditeso punetorin' : 'Shto punetorin'}}
      </h5>
    </template>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
<!--        <label for="name">Emri</label>-->
<!--        <input-->
<!--            type="text"-->
<!--            id="name"-->
<!--            class="form-control"-->
<!--            :class="{ 'is-invalid': !formData.name.isValid }"-->
<!--            v-model.trim="formData.name.val"-->
<!--            @blur="clearValidity('name')"-->
<!--        >-->
<!--        <div class="invalid-feedback">-->
<!--          <i class="bx bx-radio-circle"></i>-->
<!--          Ju lutem shkruani emrin e departamentit.-->
<!--        </div>-->
        <AppInput
            id="name"
            label="Emri"
            type="text"
            v-model="formData.firstName.val"
            :is-valid="formData.firstName.isValid"
            invalid-feedback="Ju lutem shkruani emrin e punetorit."
            @blur="clearValidity('firstName')"
        />
      </div>

      <div class="mb-3">
        <AppInput
            id="last-name"
            label="Mbiemri"
            v-model="formData.lastName.val"
            :is-valid="formData.lastName.isValid"
            invalid-feedback="Ju lutem shkruani mbiemrin e punetorit."
            @blur="clearValidity('lastName')"
        />
      </div>

      <div class="mb-3">
        <label for="department">Departamenti</label>
        <select
            id="department"
            class="form-select"
            :class="{ 'is-invalid': !formData.department.isValid }"
            v-model="formData.department.val"
            @blur="clearValidity('department')"
        >
          <option value="" disabled selected>Zgjedh departamentin</option>
          <option
              v-for="dep in departmentsForDropdown"
              :key="dep.value"
              :value="dep.value">
            {{ dep.text }}
          </option>
        </select>
        <div class="invalid-feedback">
          <i class="bx bx-radio-circle"></i>
          Ju lutem zgjedhni departamentin.
        </div>
      </div>

      <div class="mb-3">
        <AppInput
            id="hire-date"
            label="Data e punesimit"
            type="date"
            v-model="formData.hireDate"
        />
      </div>

      <div class="mb-3">
        <AppInput
            id="email"
            label="Email"
            v-model="formData.email.val"
            :is-valid="formData.email.isValid"
            invalid-feedback="Ju lutem shkruani email-in e punetorit."
            @blur="clearValidity('email')"
        />
      </div>

      <div class="text-center">
        <AppButton class="btn btn-primary" :loading="loading">
          Ruaj
        </AppButton>
        <RouterLink class="btn btn-secondary ms-2" :to="{name: 'employees'}">
          Anulo
        </RouterLink>
      </div>
    </form>
  </AppCard>
</template>

<style scoped>

</style>