<template>
  <div class="py-input">
    <div class="py-input-content">
      <div v-if="label || optional" class="header">
        <label :for="name" class="title">{{ label }}</label>
        <span :id="`${name}-optional`" class="optional">{{ optional }}</span>
      </div>
      <div class="relative">
        <textarea
          v-if="textarea"
          :name="name"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :style="style"
          :placeholder="placeholder"
          :class="`custom-input ${variant} ${error ? 'error' : ''}`"
          v-mask="mask ? vmask : ''"
		  :readonly="readonly"
        ></textarea>
        <input
          v-else
          :name="name"
          :style="style"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          @keyup.enter="$emit('on-keyup-enter')"
          :type="type"
          :class="`custom-input ${variant} ${error ? 'error' : ''}`"
          :placeholder="placeholder"
          v-mask="mask ? vmask : ''"
		  :readonly="readonly"
        />
        <div class="icon" :class="{ hidden: !hasIconSlot }">
          <slot name="icon" />
        </div>
        <div class="icon" v-if="icon_password">
          <py-icon />
        </div>
      </div>
    </div>
    <span class="hint error-message" v-if="errorMessage">{{
      errorMessage ? errorMessage : errorMessage
    }}</span>
    <span class="hint" v-else-if="hintMessage">{{ hintMessage }}</span>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { VueMaskDirective } from "v-mask";
import PyIcon from "../PyIcon/PyIcon.vue";

/* import PyIcon from './../PyIcon/PyIcon.vue' */

export default {
  name: "py-input",

  emits: ["update:modelValue", "on-keyup-enter"],

  components: {
    PyIcon,
  },

  props: {
    textarea: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      defaut: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },

    variant: {
      type: String,
      default: "",
    },

    height: {
      type: Number,
      default: 59,
    },

    modelValue: {
      required: false,
    },

    errorMessage: {
      required: false,
    },

    hintMessage: {
      required: false,
    },

    mask: {
      required: false,
    },

    label: {
      required: false,
    },

    optional: {
      required: false,
    },

    icon_password: {
      required: false,
      default: false,
    },
	readonly: {
			type: Boolean,
			default: false
		}
  },

  directives: {
    mask: {
      beforeMount: VueMaskDirective.bind,
      updated: VueMaskDirective.componentUpdated,
      unmounted: VueMaskDirective.unbind,
    },
  },

  setup(props, { attrs, slots }) {
    const vmask = ref(props.mask);
    const viewPassword = ref(false);

    const style = {
      height: `${props.height}px`,
    };
    watch(
      () => props.mask,
      () => {
        vmask.value = props.mask;
      }
    );

    const hasIconSlot = computed(() => slots.icon && slots.icon().length > 0);

    return {
      style,
      name: attrs.name || "",
      vmask,
      hasIconSlot,
      viewPassword,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
