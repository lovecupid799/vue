<template>
  <q-radio
    ref="radioRef"
    v-bind="styleClassAttrs"
    :class="radioClass"
    :model-value="modelValue"
    :val="val"
    :label="label"
    :left-label="leftLabel"
    :size="size"
    :dense="isSearchContext || dense"
    :checked-icon="checkedIcon"
    :unchecked-icon="uncheckedIcon"
    :disable="disable"
    :tabindex="tabindex"
    @update:model-value="$emit('update:modelValue', $event)">
    <slot />
  </q-radio>
</template>

<script>
export default {
  name: 'NspRadio',
  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: undefined,
    },
    val: {
      type: [String, Number, Boolean, Object],
      default: undefined,
    },
    label: {
      type: String,
      default: undefined,
    },
    leftLabel: {
      type: Boolean,
      default: undefined,
    },
    size: {
      type: String,
      default: undefined,
    },
    checkedIcon: {
      type: String,
      default: undefined,
    },
    uncheckedIcon: {
      type: String,
      default: undefined,
    },
    disable: {
      type: Boolean,
      default: undefined,
    },
    tabindex: {
      type: [String, Number],
      default: undefined,
    },
    multiline: {
      type: Boolean,
      default: undefined,
    },
    removeSpacedSibling: {
      type: Boolean,
      default: undefined,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { slots, expose }) {
    const radioRef = ref();

    const { stretchClass } = useStretch();

    const radioClass = '';

    function set() {
      radioRef.value?.set();
    }

    expose({ set });

    return {
      dense: useDense(),
      radioRef,
      set,
      radioClass,
    };
  },
};
</script>
