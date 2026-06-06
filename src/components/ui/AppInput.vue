<script setup>
const model = defineModel({type: [String, Number, Array, Object]})

defineProps({
  id: {type: String, required: true},
  label: {type: String, required: true},
  type: {type: String, default: 'text'},
  isValid: {type: Boolean, default: true},
  invalidFeedback: {type: String, default: 'Ju lutem plotesoni kete fushe'}
})
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input
      :type="type"
      :id="id"
      class="form-control"
      :class="{ 'is-invalid': !isValid }"
      v-model="model"
      v-bind="$attrs"
  >
  <!-- $attrs => attributes HTML -->
  <div class="invalid-feedback">
    <i class="bx bx-radio-circle"></i>
    {{ invalidFeedback }}
  </div>
</template>

<style scoped></style>