import { ref } from "vue";
import PyModal from "../components/PyModal/PyModal.vue";
import PyButton from "../components/PyButton/PyButton.vue";
 
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/PyModal",
  component: PyModal,
 
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    //   backgroundColor: { control: 'color' },
    onClick: {},
    //   size: {
    //     control: { type: 'select' },
    //     options: ['small', 'medium', 'large'],
    //   },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PyModal, PyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const defaultValue = ref(false);

    return { args, defaultValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<py-button @click="defaultValue = true">Activar</py-button>   <py-modal v-bind="args" v-model="defaultValue" />',
});

export const Primary = Template.bind({});
Primary.args = {
  modelValue: false,
  // primary: true,
};
