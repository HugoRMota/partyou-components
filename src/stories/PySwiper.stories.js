import PySwiper from '../components/PySwiper/PySwiper.vue';
import PySwiperSlide from "../components/PySwiper/PySwiperSlide.vue"
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/PySwiper',
  component: PySwiper, PySwiperSlide
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
  components: { PySwiper, PySwiperSlide },
  // The story's `args` need to be mapped into the template through the `setup()` method
  
  setup() {
    const swiperImages = [0 ,1 ,2 ,3 ,4]
    return { args, swiperImages };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<py-swiper class="w-full h-full" v-bind="args" > <py-swiper-slide class=" h-32 bg-blue-500 rounded-md" v-for="(image, index) in swiperImages" :key="index"></py-swiper-slide></py-swiper>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  
  slidesPerView: 3,
  spaceBetween: 30,
  pagination:`{
    "clickable": true
  }`
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
