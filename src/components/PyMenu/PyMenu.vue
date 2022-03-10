<template>
	<div class="menu">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'py-menu',

	props: {
		separator: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
