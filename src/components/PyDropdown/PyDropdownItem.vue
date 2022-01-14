<template>
	<router-link 
		v-if="to"
		:to="to"
		:class="[`hover:text-${color}`, routeIsActive ? `text-${color}` : `text-${textColor}`]"
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
import { computed } from 'vue'

import { useRoute } from 'vue-router'

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
        const route = useRoute()

        const routeIsActive = computed(() => {
            if (!to) {
                return false
            }

            if (typeof to === 'object') {
                return to.name === route.name
            }

            return route.fullPath === to
        })

        return {
            to, 
            href,
            routeIsActive,
            emitClick: () => emit('on-click')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>