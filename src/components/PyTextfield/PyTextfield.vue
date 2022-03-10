<template>
  <div class="pyTextfield">
    <label class="pyTextfield__label" v-if="label">{{ label }}</label>
    <div class="pyTextfield__top" @click="focusInput">
      <div class="pyTextfield__before" v-if="beforeIcon">
        <py-icon :name="beforeIcon" :size="16" color="zinc-900" />
      </div>
      <div class="pyTextfield__content" :style="style" :class="contentClasses">
        <div class="pyTextfield__content--prepend">
          <slot name="prepend">
            <py-icon
              v-if="prependIcon"
              :size="20"
              name="prependIcon"
              color="zinc-900"
            />
          </slot>
        </div>
        <div  class="pyTextfield__content--field">
          <textarea
            v-if="textarea"
            ref="inputRef"
            :name="name"
            :placeholder="placeholder"
            @input="updateModelValue"
            @focusin="focusIn"
            @focusout="focusOut"
            :readonly="readonly"
            :disabled="disable"
            v-model="vModel"
          ></textarea>
          <input
            v-else
            ref="inputRef"
            v-model="vModel"
            :type="type || 'text'"
            :name="name"
            :placeholder="placeholder"
            @input="updateModelValue"
            @focusin="focusIn"
            @focusout="focusOut"
            :readonly="readonly"
            :disabled="disable"
          />
        </div>
        <div class="pyTextfield__content--append" v-if="clearable">
          <py-icon
            v-if="!!modelValue"
            :size="16"
            name="close"
            color="zinc-900"
            class="cursor-pointer"
            @click="clearModelValue"
          />
        </div>
        <div class="pyTextfield__content--append" v-else>
          <slot name="append">
            <py-icon
              v-if="appendIcon"
              :size="22"
              :name="appendIcon"
              color="zinc-900"
            />
          </slot>
        </div>
      </div>
      <div class="pyTextfield__after" v-if="afterIcon">
        <py-icon :name="afterIcon" :size="16" color="zinc-900" />
      </div>
      <!-- 
      <div class="pyTextfield__after" v-if="error">
        <py-icon
          name="error"
          :size="16"
          color="red-600"
        />
      </div>
      <div class="pyTextfield__after" v-else-if="afterIcon">
        <py-icon
          :name="afterIcon"
          :size="16"
          color="zinc-900"
        />
      </div>
    --></div>
    <div class="pyTextfield__bottom">
      <slot name="error" v-if="errorMessage || hasError">
        <span class="error-message">{{ errorMessage }}</span>
      </slot>
      <slot name="hint" v-else-if="hint">
        <span>{{ hint }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { PyIcon } from "../../components";

export default {
  name: "py-textfield",

  components:{
    PyIcon
  },

  emit: ["update:modelValue", "on-clear", "on-focus-in", "on-focus-out"],

  props: {
    // Behavior
    hasError: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    label: { type: String, default: "" },

    // Content
    errorMessage: { type: String, required: false },
    hint: { type: String, required: false },
    label: { type: String, required: false },
    textarea: { type: Boolean, default: false },
    afterIcon: { type: String, required: false },
    beforeIcon: { type: String, required: false },
    appendIcon: { type: String, required: false },
    prependIcon: { type: String, required: false },

    // Model
    modelValue: { required: false },

    // General
    type: { type: String, default: "text" },

    // State
    disable: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },

    // Style
    borderColor: { type: String, default: "indigo-800" },
    focusBorderColor: { type: String, default: "black" },
    hoverBorderColor: { type: String, default: "neutral-500" },
    height: { type: [String, Number], default: 60 },
  },

  setup(props, { attrs, emit }) {
    const { name, placeholder } = attrs;
    const vModel = ref(props.modelValue);
    const focused = ref(false);
    const inputRef = ref(null);

    const style = computed(() => {
      return {
        height:
          typeof props.height === "string" ? props.height : props.height + "px",
      };
    });

    const contentClasses = computed(() => {
      return [
        !props.hasError && !props.disable && !props.readonly
          ? `hover:border-${props.hoverBorderColor}`
          : "",
        props.hasError || props.errorMessage ? "error" : "",
        props.disable || props.readonly ? "not-allowed" : "",
        focused.value && !props.hasError && !props.errorMessage
          ? `border-${props.focusColor}`
          : "",
      ];
    });

    const updateModelValue = (ev) => {
      emit("update:modelValue", vModel.value);
    };

    const clearModelValue = () => {
      const oldValue = vModel.value;
      vModel.value = "";
      emit("update:modelValue", "");
      emit("on-clear", oldValue);
    };

    const focusInput = () => {
      if (inputRef.value && !props.disable && !props.readonly) {
        inputRef.value.focus();
      }
    };

    watch(focused, (nVal, oVal) => {
      if (nVal && !oVal) {
        emit("on-focus-in");
      }

      if (!nVal && oVal) {
        emit("on-focus-out");
      }
    });

    const focusIn = () => {
      focused.value = true;
    };

    const focusOut = () => {
      focused.value = false;
    };

    return {
      name,
      placeholder,
      focused,
      inputRef,
      vModel,
      style,
      contentClasses,
      updateModelValue,
      clearModelValue,
      focusInput,
      focusIn,
      focusOut,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
