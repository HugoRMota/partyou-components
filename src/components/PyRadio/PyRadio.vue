<template>
	<div class="pyRadio" :class="{ 'invert': alignRight }">
		<input
			type="radio" 
			@change="onChange" 
			:value="value" 
			:id="radioId"
			:name="name"
		>
		<label
			class="pyRadio__input"
			:class="[ checked ? `text-${color}` : 'text-gray-500', checked && 'checked', dotMargin ]"
			:for="radioId"
		>
			<svg
				class="stroke-current fill-current"
				:height="size"
				:width="size"
				viewBox="0 0 64 64"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					class="outline"
					cx="32"
					cy="32"
					r="30"
					fill="none"
					stroke-width="4"
				/>
				<circle
					class="dot"
					cx="32"
					cy="32"
					r="20"
				/>
			</svg>
		</label>
		<label
			class="pyRadio__label"
			:style="{ fontSize: textSize + 'px' }"
			:for="radioId"
		>
			<slot>{{ label }}</slot>
		</label>        
	</div>
</template>

<script>
import { ref, getCurrentInstance, computed } from 'vue'

export default {
  name: 'py-radio',

	emits: ['update:modelValue'],

	props: {
		alignRight: {
			type: Boolean,
			default: false
		},

		label: {
			type: String,
			default: ''
		},

		value: {
			type: String,
			default: ''
		},

		name: {
			type: String,
			default: ''
		},

		color: {
			type: String,
			default: 'gray-500'
		},

		modelValue: { 
			required: false
		},

		textSize: {
			type: [String, Number],
			default: 16
		},

		inputSize: {
			type: String,
			default: 'md',
			validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
		},

		dotMargin: {
			type: String,
			default: 'mr-4'
		},

		id: {
			type: [String],
			default: ''
		}
	},

	setup(props, { emit }) {
		const { uid } = getCurrentInstance()
		const radioId = ref(props.id || `app-radio_${uid}`)

		const checked = computed(() => props.modelValue === props.value)

		const size = ref(0)

		switch (props.inputSize) {
			case 'xs':
				size.value = 12
				break

			case 'sm':
				size.value = 16
				break

			case 'lg':
				size.value = 24
				break

			case 'xl':
				size.value = 32
				break
			
			case '2xl':
				size.value = 48
				break
	
			default:
				size.value = 20
				break
		}

		return {
			radioId,
			onChange: () => emit('update:modelValue', props.value),
			size,
			checked
		}
	}
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>