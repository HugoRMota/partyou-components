<template>
  <py-select
    v-model="selected"
    elevate
    round
    width="160px"
    :options="options"
    @on-select="changeLang"
  />
</template>

<script>
import { ref } from "vue";
import PySelect from "../PySelect/PySelect.vue";

export default {
  name: "py-lang-selector",

  props: {
    langOptions: {
      type: Array,
      default: () => [],
    },
  },

  components: { PySelect },

  setup(props) {
    const lang = localStorage.getItem("@partyou/i18n");

    const langs = props.langOptions.map((o) => o.value);
    const selected = ref(langs.includes(lang) ? lang : "ptBr");

    const options = ref(props.langOptions);

    const changeLang = ({ value }) => {
      localStorage.setItem("@partyou/i18n", value);
      location.reload();
    };

    return {
      selected,
      options,
      changeLang,
    };
  },
};
</script>

<style></style>
