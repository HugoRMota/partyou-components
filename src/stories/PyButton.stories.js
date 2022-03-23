import PyButton from "../components/PyButton/PyButton.vue";
import PyButtonGradient from "../components/PyButton/PyButtonGradient.vue";
import PyButtonIcon from "../components/PyButton/PyButtonIcon.vue";
import vueRouter from "storybook-vue3-router";

import { withDesign } from "storybook-addon-designs";

//  require("../assets/main.css")

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/PyButton",
  component: { PyButton, PyButtonGradient, PyButtonIcon },
  decorators: [withDesign],

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
  components: { PyButton, PyButtonGradient },
  setup() {
    return { args };
  },
  template: '<py-button v-bind="args" />',
});

const TemplateGradient = (args) => ({
  components: { PyButtonGradient },
  setup() {
    return { args };
  },
  template: '<py-button-gradient v-bind="args" />',
});

const TemplateIcon = (args) => ({
  components: { PyButtonIcon },
  setup() {
    return { args };
  },
  template: '<py-button-icon v-bind="args" />',
});

export const Solid = Template.bind({});
export const Gradient = TemplateGradient.bind({});
export const Icon = TemplateIcon.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Solid.args = {
  // primary: true,
  label: "Click aqui",
  color: "blue-600",
};

Solid.decorators = [vueRouter()];

Gradient.args = {
  // primary: true,
  label: "Click aqui",
  colors: ["py-blue", "py-blue-light"],
};

Gradient.decorators = [vueRouter()];

Icon.args = {
  // primary: true,
  color: "blue-600",
  icon: "close",
};

Icon.decorators = [vueRouter()];

Solid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Bdiqw929OgxeQt0y8tU6Wj/Partyou---Design?node-id=486%3A633",
  },
};
