<template>
  <component
    :is="tag.type"
    :class="classList"
    :style="style"
    class="py-btn"
    v-bind="tag.args"
  >
    <!-- <span class="overlay" :class="`bg-${overlayColor}`"></span> -->

    <slot>
      <span class="label">{{ label }}</span>
    </slot>
  </component>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
  name: "py-button-gradient",

  props: {
    width: { type: Number, default: 209 },
    height: { type: Number, default: 60 },
    fontSize: { type: String, default: "text-base" },
    fullWidth: { type: Boolean, default: false },
    textColor: { type: String, default: "white" },
    label: { type: String, default: "" },
    overlayColor: { type: String, default: "white" },
    hoverTextColor: { required: false },
    weight: { type: String, default: "semibold" },
    type: { type: String, default: "button" },
    colors: { type: Array, default: () => [] },
    direction: { type: String, default: "right" },
    disabled: { type: Boolean, default: false },
    to: { type: String, default: null },
    href: { type: String, default: null },
  },

  setup(props, { attrs, emit }) {
    let tag = {};

    if (props.to) {
      tag.type = "router-link";
      tag.args = { to: props.to };
    } else if (props.href) {
      tag.type = "a";
      tag.args = { href: props.href, target: "_blank" };
    } else {
      tag.type = "button";
      tag.args = {
        type: props.type,
        disabled: props.disabled,
        onClick: () => emit("on-click"),
      };
    }

    const setStyles = () => ({
      width: props.fullWidth ? "100%" : `${props.width}px`,
      height: `${props.height}px`,
      fontSize:
        typeof props.fontSize === "number" ? `${props.fontSize}px` : null,
    });

    const setClasses = () => {
      const classes = [];

      classes.push(
        typeof props.fontSize === "string" ? props.fontSize : "",
        `text-${props.textColor}`,
        `font-${props.weight}`,
        `hover:text-${props.hoverTextColor || props.textColor}`
      );

      switch (props.direction) {
        case "top":
          classes.push("bg-gradient-to-t");
          break;

        case "top-right":
          classes.push("bg-gradient-to-tr");
          break;

        case "bottom-right":
          classes.push("bg-gradient-to-br");
          break;

        case "bottom":
          classes.push("bg-gradient-to-b");
          break;

        case "bottom-left":
          classes.push("bg-gradient-to-bl");
          break;

        case "left":
          classes.push("bg-gradient-to-l");
          break;

        case "top-left":
          classes.push("bg-gradient-to-tl");
          break;

        default:
          classes.push("bg-gradient-to-r");
          break;
      }

      if (props.colors.length === 0) {
        classes.push("to-black", "from-black");
        classes.push();
      } else if (props.colors.length === 1) {
        classes.push(`from-${props.colors[0]}`, `to-${props.colors[0]}`);
      } else {
        const gradient = [];
        const hoverGradient = [];

        props.colors.forEach((color, index) => {
          if (index === 0) {
            gradient.push(`from-${color}`);
            hoverGradient.push(`hover:to-${color}`);
          } else if (index === props.colors.length - 1) {
            gradient.push(`to-${color}`);
            hoverGradient.push(`hover:from-${color}`);
          } else {
            gradient.push(`via-${color}`);
          }
        });

        classes.push(...gradient, ...hoverGradient);
      }

      return classes;
    };

    const classes = ref(setClasses());
    const style = ref(setStyles());

    watch(props, () => {
      classes.value = setClasses();
      style.value = setStyles();
    });

    const classList = computed(() => classes.value.join(" "));

    return {
      style,
      classList,
      tag,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
