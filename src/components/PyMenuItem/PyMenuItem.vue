<template>
  <div class="menuItem" :class="{ dense }">
    <py-collapse v-if="submenu" @on-change="rotateArrow">
      <template #activator="{ setToggle }">
        <button
          class="menuItem__link"
          :class="`before:bg-${hoverColor}`"
          @click.stop="setToggle"
        >
          <div class="menuItem__link--icon">
            <py-icon :size="dense ? 12 : 20" v-if="icon" :name="icon" />
          </div>
          <p class="menuItem__link--label">{{ label }}</p>
          <div class="menuItem__link--append">
            <slot name="append">
              <py-icon
                :size="12"
                v-if="submenu"
                color="gray-900"
                name="chevron-right"
                class="transition-all duration-200"
                :class="[rotate && 'transform rotate-90']"
              />
            </slot>
          </div>
        </button>
      </template>
      <template v-slot:default="{ setTransition }">
        <py-collapse-content @on-transition="setTransition">
          <slot name="submenu"></slot>
        </py-collapse-content>
      </template>
    </py-collapse>
    <component
      v-else
      :is="tag"
      v-bind="tagAttr"
      class="menuItem__link"
      @click="onClickItem"
    >
      <div class="menuItem__link--icon">
        <py-icon :size="dense ? 12 : 20" v-if="icon" :name="icon" />
      </div>
      <p class="menuItem__link--label">{{ label }}</p>
      <div class="menuItem__link--append">
        <slot name="append">
          <py-icon
            :size="12"
            v-if="submenu"
            color="gray-950"
            name="chevron-right"
          />
        </slot>
      </div>
    </component>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { PyIcon, PyCollapse, PyCollapseContent } from "../../components";

export default {
  name: "py-menu-item",

  components: {
    PyIcon,
    PyCollapse,
    PyCollapseContent,
  },

  props: {
    submenu: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      required: true,
    },

    to: {
      type: [String, Object],
      required: false,
    },

    href: {
      type: String,
      required: false,
    },

    icon: {
      type: String,
      required: false,
    },

    dense: {
      type: Boolean,
      default: false,
    },

    hoverColor: {
      type: String,
      default: "gray-500",
    },
  },

  setup(props, { emit }) {
    const tag = ref("button");
    const tagAttr = reactive({});
    const toggle = ref(false);
    const rotate = ref(false);

    if (props.href) {
      tag.value = "a";
      tagAttr.href = props.href;
      tagAttr.target = "_target";
    } else if (props.to) {
      tag.value = "router-link";
      tagAttr.to = props.to;
    }

    const onClickItem = () => {
      if (tag.ref !== "button") {
        return;
      }

      if (props.submenu) {
        toggle.value = !toggle.value;
      }

      emit("on-click");
    };

    const rotateArrow = (r) => {
      rotate.value = r;
    };

    return {
      tag,
      tagAttr,
      onClickItem,
      rotateArrow,
      toggle,
      rotate,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
