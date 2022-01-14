<template>
    <slot />
</template>

<script>
import { computed, ref, watch, provide } from 'vue'

export default {
    name: 'py-tab-panels',

    props: ['modelValue'],
    emits: ['update:modelValue'],

    setup (props, { emit }) {
        const key = ref(0)

        const selectedTab = computed({
            get () {
                return props.modelValue
            },

            set (val) {
                emit('update:modelValue', val)
            }
        })

        watch(selectedTab, function () {
            key.value += 1
        })

        provide('seletedTab', selectedTab)

        return {
            key,
            selectedTab
        }
    }
}
</script>
