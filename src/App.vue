<template>
  <div class="px-32 py-32 bg-gray-100 h-full w-full">
    <pyInput label="Name" optional="*" />
    <pyButton color="green-500" label="Button" />
    <pyTextfield  label="Name" />
    <pySelect @update:modelValue="selected = $event" label="Gender" :modelValue="selected" :options="[
  {
    label: '1',
    value: 1
  },
  {
    label: '2',
    value: 2
  },
  {
    label: '3',
    value: 3
  }
]"/>
<!-- 
  <py-swiper
             :slides-per-view="2"
             :breakpoints="{ 1024: { slidesPerView: 2 } }"
            styles="px-8 lg:px-14"
        >
            <py-swiper-slide class="bg-red-500 w-32 h-32" v-for="(image, index) in swiperImages" :key="-index">
                
            </py-swiper-slide>
        </py-swiper> -->

  </div>
</template>

<script>
import * as item from "./components/index"
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import pyInput from "../src/components/PyInput/PyInput.vue";
import pyButton from "../src/components/PyButton/PyButton.vue";
import pyTextfield from "../src/components/PyTextfield/PyTextfield.vue"
import pySelect from "../src/components/PySelect/PySelect.vue"
import pySwiper from "../src/components/PySwiper/PySwiper.vue"
import pySwiperSlide from "../src/components/PySwiper/PySwiperSlide.vue"
  

export default {
  components: {
    pyButton,
    pyInput,
    pyTextfield,
    pySelect,
    pySwiper,
    pySwiperSlide
  },
  data(){
    return{
      swiperImages: [0,1,2,3,4],
      selected: 1,
     }
  },
  methods:{
    teste(val){
      console.log("val", val);
    }
  },

  mounted() {
    console.log("ITEM", item)
    const body = document.querySelector("body");
    body.style.setProperty("--py-color", "#5056F1");
  
  },

};
</script>
