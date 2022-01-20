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
import { computed, watch, ref} from "vue";

export default {
  name: "py-button",

  props: {
    width: {
      type: Number,
      default: 209,
    },

    height: {
      type: Number,
      default: 60,
    },

    fontSize: {
      type: [String, Number],
      default: "text-base",
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: "black",
    },

    textColor: {
      type: String,
      default: "white",
    },

    label: {
      type: String,
      default: "",
    },

    overlayColor: {
      type: String,
      default: "white",
    },

    hoverTextColor: {
      required: false,
    },

    weight: {
      type: String,
      default: "semibold",
    },

    type: {
      type: String,
      default: "button",
      validator: (value) =>
        ["button", "submit", "reset"].includes(value.toLowerCase()),
    },

    to: {
      default: null,
      type: String,
    },

    href: {
      default: null,
      type: String,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
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

    const setClasses = () => [
      typeof props.fontSize === "string" ? props.fontSize : "",
      `text-${props.textColor}`,
      `bg-${props.color}`,
      `font-${props.weight}`,
      `hover:text-${props.hoverTextColor || props.textColor}`,
      `hover:bg-${hoverColor(props.color)}`,
    ];

    function hoverColor(hex) {
      if (hex == "primary") {
        // console.log("COLOR", color)
        // const value = getComputedStyle(document.documentElement).getPropertyValue('--py-color');
        // console.log("🚀 ~ file: PyButton.vue ~ line 133 ~ hoverColor ~ value", value)
      } else {
        let color;
        if (parseInt(hex.split("-")[1]) == 900) {
          color = `${hex.split("-")[0]}-${parseInt(hex.split("-")[1]) - 100}`;
        } else {
          color = `${hex.split("-")[0]}-${parseInt(hex.split("-")[1]) + 100}`;
        }
        return color;
      }
    }

    // console.log(hexToRGB("#5056F1"));

    function hexToRGB(h) {
      let r = 0,
        g = 0,
        b = 0;

      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      return "rgb(" + +r + "," + +g + "," + +b + ")";
    }

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
