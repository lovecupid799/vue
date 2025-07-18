<template>
  <div class="form-check-input" :class="setFormClass">
    <input
      class="form-check-input"
      type="checkbox"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="checked"
      @change="updateCheckValue"
    />
    <label :class="labelClass" :for="id"><slot></slot></label>
  </div>
</template>

<script>
import { uniqueId } from 'lodash'

export default {
  props: {
    inline: Boolean,
    modelValue: [String, Object],
    value: String,
    disabled: Boolean,
    labelClass: { type: String, default: 'form-check-label' },
  },
  data() {
    return {
      formClass: 'form-check',
      id: uniqueId('sdl-check-box'),
      checked: '',
      checkList: [],
    }
  },
  emits: ['update:modelValue'],
  computed: {
    setFormClass: function () {
      if (this.inline) return this.formClass + ' form-check-inline'
      return this.formClass
    },
  },
  methods: {
    updateCheckValue: function (event) {
      if ('object' === typeof this.modelValue) {
        this.checkList = this.modelValue
        if (this.checked) {
          this.checkList.push(event.target.value)
        } else {
          this.checkList.splice(this.checkList.indexOf(event.target.value), 1)
        }
        this.$emit('update:modelValue', this.checkList)
      } else {
        this.$emit('update:modelValue', this.checked ? event.target.value : '')
      }
    },
    syncValue() {
      if ('object' === typeof this.modelValue) {
        if (this.modelValue.includes(this.value)) this.checked = true
        else this.checked = false
      } else {
        if (this.modelValue === this.value) this.checked = true
        else this.checked = false
      }
    },
  },
  watch: {
    modelValue() {
      this.syncValue()
    },
  },
  mounted() {
    this.syncValue()
  },
}
</script>

<style lang="scss">
.form-check-input {
  position: relative;
  input[type='checkbox'] {
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
    &::after {
      position: absolute;
      left: 3px;
      top: 3px;
      width: 10px;
      height: 10px;
    }
  }
}

/* ** checkbox ** */
input[type='checkbox'] {
  ~ .form-check-label {
    &::before {
      border-radius: 4px;
      border: 1px solid #555;
      background: #fff;
    }
  }
  &:checked {
    ~ .form-check-label {
      &::before {
        border-color: #0b219e;
        background-color: #0b219e;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M5.05498 9.40413L0.833984 5.18863L1.54061 4.48112L5.05498 7.99075L10.459 2.59375L11.1656 3.30125L5.05498 9.40413Z' fill='white'/%3E%3C/svg%3E");
      }
    }
  }
}
</style>
