<template>
  <button
    @click="onClick"
    type="button"
    class="toogle"
    role="switch"
    aria-checked="false"
  >
    <span aria-hidden="true" class="toogle-background"></span>
    <span
      :class="active ? 'bg-py-blue-toogle' : 'bg-gray-200'"
      aria-hidden="true"
      class="toogle-circle-margin"
    ></span>
    <span
      aria-hidden="true"
      :class="active ? 'translate-x-5 bg-py-blue' : 'translate-x-0 bg-white'"
      class="toogle-circle"
    ></span>
  </button>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false },
  },

  setup(_, { emit }) {
    const onClick = () => {
      emit("on-click");
    };

    return {
      onClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
