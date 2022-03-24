<template>
	<teleport to="body">
		<div class="py-modal" v-show="modelValue">
			<transition
        		enter-active-class="ease-out duration-300"
     			enter-from-class="opacity-0"
        		enter-to-class="opacity-100"
        		leave-active-class="ease-in duration-200"
        		leave-from-class="opacity-100"
        		leave-to-class="opacity-0"
  		    >
			<div class="py-modal-container">
				<div class="py-modal-container-back" @click="hide" aria-hidden="true"></div>
                <span class="py-modal-container-back-mobile" aria-hidden="true">&#8203;</span>
			 	  <transition
            		enter-active-class="ease-out duration-300"
            		enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            		enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            		leave-active-class="ease-in duration-200"
            		leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            		leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
         		 >   	
			 		<div class="py-modal-content" v-if="modelValue" :class="modalStyle">
					    <span class="py-modal-content--close" @click="hide">
 							<py-button-icon color="white" iconColor="black" hoverIconColor="py-blue" icon="close"  ></py-button-icon>
						</span>
						  <header-modal v-if="title"
             				:header-title="title"
                			:header-subtitle="subTitle"/>
						<slot></slot>
			     	</div>
				   </transition>
			</div> 
			</transition>
	 	</div>
	</teleport>
</template>

<script>
import { computed } from "vue";
import HeaderModal from "./HeaderModal/HeaderModal.vue"
import PyButtonIcon from "../PyButton/PyButtonIcon.vue";

export default {
	name: 'py-modal',

	components:{
		HeaderModal,
		PyButtonIcon
	},

	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		title:{
			type:String, default: null
		},
		subTitle:{
			type: String, default: null
		},	 

		size:{
			type: String,
			default: "md",
			validator: function (value) {
         		return ['sm', 'md', 'lg', 'xl', '2xl'].indexOf(value) !== -1
	      }
		}
	},

	setup(props, { emit }) {

		const hide = () => {
			emit('update:modelValue', false)
		}

		const modalStyle = computed(() => {
			let styles = ""

			 switch (props.size) {
				case 'sm':
					 styles = "sm:max-w-sm sm:w-full"
					 break;
				case 'md':
					 styles = "sm:max-w-md sm:w-full"
					break;
				
				case 'lg':
				  	 styles = "sm:max-w-lg sm:w-full"
					break;

				case 'xl':
					 styles = "sm:max-w-xl sm:w-full"
					break;

				case '2xl':
					 styles = "sm:max-w-2xl sm:w-full"
					break;
			 
			 
				 default:
					 styles = "sm:max-w-sm sm:w-full"
					 break;
			 }

			return  styles
		})

		return {
			hide,
			modalStyle
		};
	},
};

</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>