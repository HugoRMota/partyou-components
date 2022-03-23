import PyDropdown from '../components/PyDropdown/PyDropdown.vue';
import PyDropdownContent from '../components/PyDropdown/PyDropdownContent.vue';
import PyDropdownItem from "../components/PyDropdown/PyDropdownItem.vue";
import PyButton from "./../components/PyButton/PyButton.vue";
import vueRouter from "storybook-vue3-router";

 require("../assets/main.css")

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/PyDropdown',
  component: PyDropdown,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PyDropdown, PyDropdownContent, PyDropdownItem, PyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <py-dropdown v-bind="args">
      <template #activator>
        <py-button 
          label="Dropdown"
          :width="160"
          :height="48"
          color="blue-500"
        />
      </template>
      <py-dropdown-content align="left">
        <py-dropdown-item color="blue-500" label="Item 1" />
        <py-dropdown-item color="blue-500" label="Item 2" />
        <py-dropdown-item color="blue-500" label="Item 3" />
        <py-dropdown-item color="blue-500" label="Item 4" />
      </py-dropdown-content>
    </py-dropdown>
  `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.decorators = [vueRouter()];

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
