import { ref } from "vue";
import PyToogle from "../components/PyToogle/PyToogle.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/PyToogle",
  component: PyToogle,

  argTypes: {
    //   backgroundColor: { control: 'color' },
    onClick: {},
    //   size: {
    //     control: { type: 'select' },
    //     options: ['small', 'medium', 'large'],
    //   },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PyToogle },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const defaultValue = ref(true);

    return { args, defaultValue };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<py-toogle v-bind="args" v-model="defaultValue" @onClick="defaultValue = !defaultValue" />',
});

export const Primary = Template.bind({});
Primary.args = {
  active: true,
};
