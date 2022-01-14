<template>
    <transition name="dropdown-content">
        <div 
            class="pyDropdownContent" 
            v-if="toggle"
            :class="[
                bordered && 'bordered',
                flat && 'flat',
                `bg-${bgColor}`,
                align,
            ]"
            :style="style"
        >
            <slot />
        </div>
    </transition>
</template>

<script>
import { inject, computed } from 'vue'
export default {
    name: 'py-dropdown-content',

    props: {
        bordered: {
            type: Boolean,
            default: false
        },

        flat: {
            type: Boolean,
            default: false
        },

        bgColor: {
            type: String,
            default: 'white'
        },

        maxHeight: {
            type: [String, Number],
            default: '18rem'
        },

        width: {
            type: [String, Number],
            default: '14rem'
        },

        align: {
            type: String,
            default: 'center',
            required: false,
            validator: function(v) {
                return ['center', 'right', 'left'].includes(v)
            }
        }
    },
    
    setup (props) {
        const toggle = inject('toggle')
        const style = computed(() => {
            const tNumber = typeof(1)

            return {
                maxHeight: typeof(props.maxHeight) === tNumber ? `${props.maxHeight}px` : props.maxHeight,
                width: typeof(props.width) === tNumber ? `${props.width}px` : props.width
            }
        })

        return {
            toggle,
            style
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>