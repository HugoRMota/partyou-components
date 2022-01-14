<template>
    <div class="pyTabs">
        <slot :activateTab="activateTab"/>
    </div>
</template>

<script>
import { computed, provide, reactive } from 'vue'

export default {
    name: 'py-tabs',

    props: ['modelValue'],
    emits: ['update:modelValue'],

    setup (props, { emit }) {
        const selectedTab = computed({
            get () {
                return props.modelValue
            },

            set (val) {
                emit('update:modelValue', val)
            }
        })

        const currentTab = reactive({
            name: selectedTab
        })

        const activateTab = (tabName) => {
            emit('update:modelValue', tabName)
        }

        provide('__currentTab', currentTab)
        provide('__activateTab', activateTab)

        return {
            selectedTab,
            activateTab
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
