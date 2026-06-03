<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import {reactive, ref, watch} from "vue";
import AppButton from "@/components/ui/AppButton.vue";

const props = defineProps({
  isEdit: {type: Boolean, default: false},
  loading: {type: Boolean, default: false},
  department: {type: Object, default: null}
})

const formData = reactive({
  name: {val: '', isValid: true},
  location: ''
})

// validimi
const isFormValid = ref(true)
function validateForm() {
  isFormValid.value = true

  // if (formData.name.val === '' || formData.name.val === null)
  if (!formData.name.val) {
    formData.name.isValid = false
    isFormValid.value = false
  }
}

function clearValidity(key) {
  // formData.key
  // formData['name'].isValid = true
  formData[key].isValid = true
}

const emit = defineEmits(['saveDepartment'])
function handleSubmit() {
  validateForm()

  if (!isFormValid.value) {
    return
  }

  emit('saveDepartment', {
    name: formData.name.val,
    location: formData.location
  })
}

watch(() => props.department, (dep) => {
  if (!dep) {
    return
  }

  formData.name.val = dep.name
  formData.location = dep.location
  formData.name.isValid = true
}, {immediate: true})
</script>

<template>
  <AppCard>
    <template #header>
      <h5>
        {{ isEdit ? 'Perditeso departamentin' : 'Shto departament'}}
      </h5>
    </template>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name">Emri</label>
        <input
            type="text"
            id="name"
            class="form-control"
            :class="{ 'is-invalid': !formData.name.isValid }"
            v-model.trim="formData.name.val"
            @blur="clearValidity('name')"
        >
        <div class="invalid-feedback">
          <i class="bx bx-radio-circle"></i>
          Ju lutem shkruani emrin e departamentit.
        </div>
      </div>

      <div class="mb-3">
        <label for="location">Lokacioni</label>
        <input
            type="text"
            id="location"
            class="form-control"
            v-model.trim="formData.location"
        >
      </div>

      <div class="text-center">
        <AppButton class="btn btn-primary" :loading="loading">
          Ruaj
        </AppButton>
        <RouterLink class="btn btn-secondary ms-2" :to="{name: 'departments'}">
          Anulo
        </RouterLink>
      </div>
    </form>
  </AppCard>
</template>

<style scoped>

</style>