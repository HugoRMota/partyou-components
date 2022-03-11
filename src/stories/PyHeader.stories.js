import PyHeader from "../components/PyHeader/PyHeader.vue";
console.log("🚀 ~ file: PyHeader.stories.js ~ line 2 ~ PyHeader", PyHeader);

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/PyHeader",
  component: PyHeader,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PyHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<py-header  v-bind="args" />',
});
console.log("🚀 ~ file: PyHeader.stories.js ~ line 29 ~ PyHeader", PyHeader);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  // primary: true,
  // icon: "market",
  // size: "7.5rem",
  // sizeLg: "8rem",
  // rounded: true,
  // iconSize: "48",
  // fontColor: "gray-500",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
