<template>
  <div :class="setFormClass">
    <input
      class="form-radio-input"
      type="radio"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="checked"
      @change="updateCheckValue"
    />
  <label :class="labelClass" :for="id"><slot></slot></label>
  </div>
</template>

<script setup>
import { uniqueId } from 'lodash'
import { ref, computed, defineProps, defineEmits, onMounted, watch } from 'vue'

const props = defineProps({
    inline: Boolean,
    modelValue: [String, Object],
    value: String,
    disabled: Boolean,
    labelClass: { type: String, default: 'form-check-label' },
});

const formClass = ref('form-check');
const id = uniqueId('sdl-check-box');
const checked = ref('');
const checkList = ref([]);

const setFormClass = computed(() =>{
  if (props.inline) return formClass.value + ' form-check-inline'
  return props.formClass
});

const emit = defineEmits(['update:modelValue']);
const updateCheckValue = (event) => {
  if ('object' === typeof props.modelValue) {
    checkList.value = props.modelValue
    if (checked.value) {
      checkList.value.push(event.target.value)
    } else {
      checkList.value.splice(checkList.value.indexOf(event.target.value), 1)
    }
    emit('update:modelValue', checkList.value)
  } else {
    emit('update:modelValue', checked.value ? event.target.value : '')
  }
};

const syncValue = () =>{
  if ('object' === typeof props.modelValue) {
    if (props.modelValue.includes(props.value)) checked.value = true
    else checked.value = false
  } else {
    if (props.modelValue === props.value) checked.value = true
    else checked.value = false
  }
};

watch(() => props.modelValue,  (newValue, oldValue) => {
    syncValue();
});

onMounted(()=>{
  syncValue()
});
</script>
