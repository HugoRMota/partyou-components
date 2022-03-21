<template>
  <div
    v-click-away="onClickAway"
    ref="pySelect"
    class="py-select"
    :class="[fullWidth && 'w-full']"
    :style="{
      width: !fullWidth && width,
      height,
    }"
  >
    <label :for="label" class="py-select__label">{{ label }}</label>
    <div class="py-select__content">
      <button
        v-if="!toggle"
        class="py-select__content__input"
        :class="[
          elevate && 'shadow-2xl',
          `rounded-${rounded}`,
          `bg-${color}`,
          `text-${textColor}`,
          `border-${borderColor}`,
          `focus:ring-${focusColor} focus:border-${focusColor}`,
        ]"
        @click="toggleOptions"
      >
        <span class="block truncate">{{ labelByValue }}</span>
      </button>
      <input
        v-else
        type="text"
        class="py-select__content__input"
        v-model="search.content"
        @focusin="focusIn()"
        @focusout="focusOut()"
        :class="[
          elevate && 'shadow-2xl',
          `rounded-${rounded}`,
          `bg-${color}`,
          `text-${textColor}`,
          `border-${borderColor}`,
          `focus:ring-${focusColor} focus:border-${focusColor}`,
        ]"
      />
      <span
        v-show="!search.content && toggle"
        class="py-select__content__input__selected"
        >{{ labelByValue }}</span
      >
      <div class="py-select__content__input__arrow">
        <slot name="icon">
          <py-icon
            :class="toggle ? 'rotate-0' : 'rotate-180'"
            :name="icon"
            :size="15"
            :color="iconColor"
            class="transition transform duration-200"
          />
        </slot>
      </div>
    </div>
    <div class="py-select__fade" v-if="toggle" @click="toggle = false"></div>
    <transition
      enter-active-class="transform transition duration-300 ease-custom"
      enter-class="translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="-translate-y-0 scale-y-100 opacity-100"
      leave-active-class="-transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        class="py-select__options"
        v-show="toggle"
        :class="[toggle && 'show', position]"
      >
        <li
          v-for="(option, index) in listOptions"
          :key="index"
          @click="selectValue(option.value)"
          :class="[
            option.value === modelValue && 'selected',
            option.value === modelValue &&
              `text-${color === 'white' ? 'gray-600' : color}`,
          ]"
        >
          <span
            class="overlay"
            v-if="option.value === modelValue"
            :class="
              overlayColor
                ? `bg-${overlayColor}`
                : `bg-${color === 'white' ? 'gray-800' : color}`
            "
          >
          </span>
          {{ option.label }}
        </li>
        <span
          class="py-select__options__notfound"
          v-if="listOptions.length == 0"
          >Nenhum dado encontrado</span
        >
      </ul>
    </transition>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { directive } from "vue3-click-away";
import PyIcon from "../PyIcon/PyIcon.vue";

export default {
  name: "py-select",

  emits: ["update:modelValue", "on-select"],

  directives: {
    ClickAway: directive,
  },

  components: {
    PyIcon,
  },

  props: {
    modelValue: { required: false },
    options: { type: Array, default: () => [] },
    label: { type: String, default: "" },

    rounded: { type: String, default: "md" },
    elevate: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },

    width: { type: String, default: "180px" },
    height: { type: String, default: "40px" },
    textSize: { type: String, default: "18px" },

    textColor: { type: String, default: "gray-800" },
    color: { type: String, default: "white" },
    iconColor: { type: String, default: "gray-400" },
    icon: { type: String, default: "chevron-down" },
    borderColor: { type: String, default: "gray-500" },
    focusColor: { type: String, default: "indigo-500" },
    overlayColor: { type: String, required: false },
  },

  setup(props, { emit }) {
    const pySelect = ref(null);
    const toggle = ref(false);
    const position = ref("");
    const search = ref({ active: false, content: "" });

    const labelByValue = computed(() => {
      if (props.options.some((i) => i.value === props.modelValue)) {
        const item = props.options.find((i) => i.value === props.modelValue);
        return item.label;
      }
    });

    const listOptions = computed(() => {
      if (search.value.content) {
        return props.options.filter((element) => {
          return element.label
            .toLowerCase()
            .match(search.value.content.toLowerCase());
        });
      } else {
        return props.options;
      }
    });

    const removeSpecialCharacters = (v) => {
      return v
        .normalize("NFD")
        .replace(/[^\w\d\s]/gu, "")
        .toLowerCase();
    };

    const selectValue = (v) => {
      toggle.value = false;
      emit("update:modelValue", v);
    };

    const focusIn = () => {
      toggle.value = true;
    };

    const focusOut = () => {
      toggle.value = false;
    };

    const emitOnChange = () => {
      const option = props.options.find(
        (item) => item.value === props.modelValue
      );
      emit("on-select", option);
    };

    watch(toggle, () => {
      if (!toggle.value) {
        const options = pySelect.value.querySelector("ul");

        position.value = "";
        options.style.maxHeight = "";
      }
    });

    watch(labelByValue, emitOnChange);

    const onClickAway = () => {
      //  toggle.value = false;
    };

    const toggleOptions = () => {
      const options = pySelect.value.querySelector("ul");
      const oHeight = options.offsetHeight + 24;
      const rect = pySelect.value.getBoundingClientRect();
      const fromBottom = window.innerHeight - rect.bottom;
      const fromTop = rect.top;

      if (window.innerWidth >= 768) {
        if (toggle.value) {
          toggle.value = false;
          // search.value.active = false;
        } else {
          if (oHeight > fromBottom) {
            if (fromTop > fromBottom) {
              position.value = "top";
              options.style.maxHeight =
                fromTop < oHeight && fromTop - 24 + "px";
            } else {
              position.value = "bottom";
              options.style.maxHeight = fromBottom - 24 + "px";
            }
          } else {
            position.value = "bottom";
          }

          toggle.value = true;
          // search.value.active = true;
        }
      } else {
        toggle.value = !toggle.value;
      }
    };

    return {
      labelByValue,
      selectValue,
      emitOnChange,
      toggle,
      toggleOptions,
      pySelect,
      position,
      search,
      onClickAway,
      focusOut,
      focusIn,
      listOptions,
    };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
