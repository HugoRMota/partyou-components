<template>
    <div class="py-collapse">
        <slot :setToggle="setToggle" name="activator"/>
        <slot :setTransition="setTransition"/>
    </div>
</template>

<script> 
import { ref, provide } from 'vue'

export default {
    name: 'py-collapse',
    
    setup (_, { emit }) {
        const toggle = ref(false)
        const onTransition = ref(false)

        const setToggle = () => {
            if (onTransition.value) {
                return
            }

            toggle.value = !toggle.value
            emit('on-change', toggle.value)
        }

        const setTransition = () => onTransition.value = !onTransition.value

        provide('toggle', toggle)
        provide('onTransition', onTransition)

        return {
            setToggle,
            setTransition
        }
    }
}
</script>

<style>

</style>