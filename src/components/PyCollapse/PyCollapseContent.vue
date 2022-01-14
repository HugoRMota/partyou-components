<template>
    <div class="py-collapseContent" :style="style">
        <div class="py-collapseContent__inner" ref="content">
            <slot/>
        </div>
    </div>
</template>

<script>
import { inject, ref, watch } from 'vue'

export default {
    name: 'py-collapse-content',
    
    setup (_, { emit }) {
        const content = ref(null)
        const toggle = inject('toggle')
        const onTransition = inject('onTransition')
        const style = ref({ display: 'none' })

        watch(toggle, (newValue) => {
            if (onTransition.value) {
                return
            }

            emit('on-transition')

            const baseStyle = {
                'overflow': 'hidden',
                'transition': 'height 0.2s cubic-bezier(0.25, 0.8, 0.5, 1) 0s'
            }

            if (newValue) {
                style.value = {
                    ...baseStyle,
                    'height': '0px'
                }

                setTimeout(() => {
                    style.value = {
                        ...baseStyle,
                        'height': content.value.clientHeight + 'px'
                    }
                }, 100);

                setTimeout(() => {
                    style.value = {}
                    emit('on-transition')
                }, 300);
            } else {
                style.value = {
                    ...baseStyle,
                    'height': content.value.clientHeight + 'px'
                }

                setTimeout(() => {
                    style.value = {
                        ...baseStyle,
                        'height': '0px'
                    }
                }, 100)

                setTimeout(() => {
                    style.value = { 'display': 'none'}
                    emit('on-transition')
                }, 300);
            }
        })

        return {
            style,
            content
        }
    }
}
</script>

<style>

</style>