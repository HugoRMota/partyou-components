<template>
	<span
		class="badge"
		:class="[
			`badge__${size}`,
			`bg-${color}`,
			`text-${textColor}`,
			`badge__${align}`,
			floating && 'badge__float',
		]"
		@click.stop="emit('on-click')"
	>
		<slot>
			<span>{{ label }}</span>
		</slot>
	</span>
</template>

<script>
export default {
	name: 'py-badge',

	emits: ['on-click'],

	props: {
		color: {
			type: String,
			default: 'gray-500',
		},

		textColor: {
			type: String,
			default: 'white',
		},

		size: {
			type: String,
			default: 'md',
			validator(value) {
				return ['sm', 'md', 'lg'].includes(value)
			},
		},

		label: {
			type: String,
			default: '',
		},

		floating: {
			type: Boolean,
			default: false,
		},

		align: {
			type: String,
			default: 'middle',
			validator(value) {
				return ['middle', 'top', 'bottom'].includes(value)
			},
		},
	},

	setup(_, { emit }) {
		return {
			emit,
		}
	},
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
