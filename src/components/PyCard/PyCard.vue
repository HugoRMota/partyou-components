<template>
    <div class="pyCard" :class="classes">
        <slot />
    </div>
</template>

<script>
import { watch, ref, computed } from 'vue'

export default {
    name: 'py-card',

    props: {
        outline: {
            type: Boolean,
            default: false
        },

        color: {
            type: String,
            default: 'white'
        },

        elevation: {
            type: String,
            default: 'none'
        },

        rounded: {
            type: String,
            default: 'md'
        },

        padding: {
            type: String,
            default: 'p-0'
        }
    },

    setup (props) {
        const classList = ref([])

        const classes = computed(() => classList.value.join(' '))

        function setupStyle ({ color, elevation, rounded, outline, padding }) {
            classList.value = [
                `bg-${color}`,
                `shadow-${elevation}`,
                `rounded-${rounded}`,
                `${padding}`,
                outline ? `border border-solid border-gray-200` : ''
            ]
        }

        setupStyle(props)
        watch(props, (newProps) => setupStyle(newProps))

        return {
            classes
        }
    }
}
</script>

<style  scoped>
@import './style.scss';
</style>