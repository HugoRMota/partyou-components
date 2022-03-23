<template>
	<router-link 
		v-if="to"
		:to="to"
        v-slot="{ isActive, isExactActive }"
		:class="[`hover:text-${color}`, isActive && isExactActive ? `text-${color}` : `text-${textColor}`]"
        class="pyDropdownItem"
	>
        <span class="overlay" :class="`bg-${color}`"></span>
        <slot>
            <span class="label">{{ label }}</span>
        </slot>
	</router-link>

	<a
		v-else-if="href"
		:href="href" 
		target="_blank"
		:class="[`hover:text-${color}`, `text-${textColor}`]"
        class="pyDropdownItem"
	>
        <span class="overlay" :class="`bg-${color}`"></span>
        <slot>
            <span class="label">{{ label }}</span>
        </slot>
	</a>

	<button
		v-else
		:class="[`hover:text-${color}`, `text-${textColor}`]"
		@click="emitClick"
        class="pyDropdownItem"
        :disabled="disabled"
	>
        <span class="overlay" :class="`bg-${color}`"></span>
        <slot>
            <span class="label">{{ label }}</span>
        </slot>
	</button>
</template>

<script>
export default {
    name: 'py-dropdown-item',
    
    props: {
        label: {
            type: String,
            default: ''
        },

        color: {
            type: String,
            default: 'gray-600'
        },

        textColor: {
            type: String,
            default: 'gray-800'
        },

        disabled: {
            type: Boolean,
            default: false
        }
    },

    setup (_, { attrs, emit }) {
        const { to, href } = attrs

        return {
            to, 
            href,
            emitClick: () => emit('on-click')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>