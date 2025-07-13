<template>
  <div></div>
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

    const defaultIsTooltip = computed(() => slots.default?.()[0]?.type?.name === 'NspTooltip');
    // const radioClass = computed(() => ({
    //   'nsp-radio': true,
    //   'nsp-radio--no-label': !(props.label || (slots.default && !defaultIsTooltip.value)),
    //   'nsp-radio--multiline': props.multiline,
    //   'spaced-sibling': !props.removeSpacedSibling,
    //   ...stretchClass.value,
    // }));
    const radioClass = '';

    function set() {
      radioRef.value?.set();
    }

    expose({ set });

    return {
      ...useInheritAttrs(),
      ...useSearchChild(),
      dense: useDense(),
      radioRef,
      set,
      radioClass,
    };
  },
};
</script>
