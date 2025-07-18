<template>
  <div class="form-check-input" :class="setFormClass">
    <input
      class="form-radio"
      type="radio"
      :id="id"
      :value="value"
      :disabled="disabled"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label :class="labelClass" :for="id"><slot></slot></label>
  </div>
</template>

<script setup>
import { uniqueId } from 'lodash'
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
  inline: Boolean,
  modelValue: [String, Object],
  value: String,
  disabled: Boolean,
  labelClass: { type: String, default: 'form-check-label' },
})

const formClass = ref('form-check')
const id = uniqueId('sdl-check-box')

const setFormClass = computed(() => {
  if (props.inline) return formClass.value + ' form-check-inline'
  return props.formClass
})

const isChecked = computed(() => {
  return props.modelValue === props.value
})
</script>

<style lang="scss">
.form-check-input {
  position: relative;
  input[type='radio'] {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    opacity: 0;
  }
  .form-check-label {
    display: flex;
    position: relative;
    &::before {
      display: inline-flex;
      content: '';
      width: 16px;
      height: 16px;
      margin: 2px 8px 2px 0;
    }
  }
}

/* ** radio ** */
input[type='radio'] {
  ~ .form-check-label {
    &::before {
      border-radius: 8px;
      border: 1px solid #555;
      background: #fff;
    }
  }
  &:checked {
    ~ .form-check-label {
      &::before {
        border-color: #0b219e;
      }
      &::after {
        position: absolute;
        left: 3px;
        top: 5px;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background-color: #0b219e;
      }
    }
  }
}
</style>
