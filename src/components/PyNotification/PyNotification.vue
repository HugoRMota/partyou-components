<template>
  <div :class="typeNotication.color" class="notification">
    <div class="notification-icon">
      <div class="notification-icon-content">
        <component
          :size="28"
          :color="typeNotication.iconColor"
          :is="typeNotication.icon"
        />
      </div>
    </div>
    <div :style="`color:${typeNotication.iconColor}`" class="notification-text">
      <p>{{ text }}</p>
      <div v-if="listInfo.length > 0" class="notification-text-list">
        <ul role="list">
          <li v-for="item in listInfo" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="notification-button">
      <div class="notification-button-content">
        <py-button-icon
          :color="typeNotication.color"
          :iconColor="typeNotication.iconButton"
          icon="close"
        ></py-button-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import PyButtonIcon from "../PyButton/PyButtonIcon.vue";
import { PhProhibit, PhWarningCircle, PhCheckCircle } from "phosphor-vue";

export default {
  components: {
    PyButtonIcon,
    PhProhibit,
    PhWarningCircle,
    PhCheckCircle,
  },

  props: {
    text: {
      type: String,
      default: "Notification",
    },
    listInfo: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "error",
    },
  },

  setup(props) {
    const typeNotication = computed(() => {
      let config = {};
      switch (props.type) {
        case "error":
          config = {
            color: "bg-red-200",
            icon: "ph-prohibit",
            iconColor: "#b91c1c",
            iconButton: "red-400",
          };

          break;

        case "alert":
          config = {
            color: "bg-yellow-200",
            icon: "ph-warning-circle",
            iconColor: "#a16207",
            iconButton: "yellow-400",
          };

          break;

        case "success":
          config = {
            color: "bg-green-200",
            icon: "ph-check-circle",
            iconColor: "#15803d",
            iconButton: "green-400",
          };

          break;

        default:
          config = {
            color: "bg-green-200",
            icon: "ph-check-circle",
            iconColor: "#15803d",
            iconButton: "green-400",
          };
          break;
      }

      return config;
    });

    return { typeNotication };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
