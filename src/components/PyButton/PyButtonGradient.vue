<template>
  <component
    :is="tag.type"
    :class="classList"
    :style="style"
    class="py-btn"
    v-bind="tag.args"
  >
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
    const tag = computed(() => {
      const btnProps = {
        type: '',
        args: {}
      }

      if (props.to) {
        btnProps.type = "router-link";
        btnProps.args = { to: props.to };
      } else if (props.href) {
        btnProps.type = "a";
        btnProps.args = { href: props.href, target: "_blank" };
      } else {        
        btnProps.type ='button',
        btnProps.args = {
          type: props.type,
          onClick: () => emit("on-click")
        }
      }

      btnProps.args.disabled = props.disabled

      return btnProps
    });

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
        `hover:text-${props.hoverTextColor || props.textColor}`,
        `before:bg-${props.overlayColor}`
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

        props.colors.forEach((color, index) => {
          if (index === 0) {
            gradient.push(`from-${color}`);
          } else if (index === props.colors.length - 1) {
            gradient.push(`to-${color}`);
          } else {
            gradient.push(`via-${color}`);
          }
        });

        classes.push(...gradient);
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
