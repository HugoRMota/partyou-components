<template>
	<teleport to="body">
		<div class="py-modal" v-show="modelValue">
			<div class="py-modal-content" :style="modalStyle">
				<span class="py-modal-content--close" @click="hide">&times;</span>
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script>
import { computed } from "vue";

export default {
	name: 'py-modal',

	props: {
		modelValue: {
			type: Boolean,
			default: false
		},

		width: {
			type: [Number, String],
			default: 590,
		},

		height: {
			type: [Number, String],
			default: 'auto'
		},

		fullScreen: {
			type: Boolean,
			default: false
		}
	},

	setup(props, { emit }) {

		const hide = () => {
			emit('update:modelValue', false)
		}

		const modalStyle = computed(() => {
			if (props.fullScreen) {
				return
			}

			return {
				'width': typeof (props.width) === typeof (1) ? props.width + 'px' : props.width,
				'height': typeof (props.height) === typeof (1) ? props.height + 'px' : props.height,
			}
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