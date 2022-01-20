<template>
    <div 
        class="pyDropdown" 
        v-click-away="onClickAway"
        @click="setToggle"
    >
        <slot name="activator" />
        <slot />
    </div>
</template>

<script>
import { ref, provide } from 'vue'
import { directive } from 'vue3-click-away'

export default {
    name: 'py-dropdown',
    
    directives: {
        ClickAway: directive
    },

    setup (_, { emit }) {
        const toggle = ref(false)

        const setToggle = () => {
            toggle.value = !toggle.value
            emit('on-change', toggle.value)
        }
        const onClickAway = () => {
            toggle.value = false
            emit('on-change', toggle.value)
        }

        provide('toggle', toggle)

        return {
            setToggle,
            onClickAway
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>