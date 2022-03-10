<template>
	<hr class="divider" :class="classes" :style="styles" />
</template>

<script>
import { reactive, ref } from 'vue'

export default {
	name: 'py-divider',

	props: {
		color: {
			type: String,
			default: 'gray-100',
		},

		margin: {
			type: [String, Number],
			default: 0,
		},

		vertical: {
			type: Boolean,
			default: false,
		},
	},

	setup(props) {
		const classes = ref([])
		const styles = reactive({})
		const margin = typeof props.margin === typeof 0 ? `${props.margin}px` : props.margin

		if (props.vertical) {
			classes.value.push('divider__vertical')
			styles['margin-top'] = margin
			styles['margin-bottom'] = margin
		} else {
			classes.value.push('divider__horizontal')
			styles['margin-left'] = margin
			styles['margin-right'] = margin
		}

		classes.value.push(`bg-${props.color}`)

		return {
			classes,
			styles,
		}
	},
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
