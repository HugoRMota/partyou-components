<template>
    <div class="pyTab">
        <div 
            class="pyTab__button" 
            :class="{ 'active': tabIsActive }" 
            @click="onClickTab" 
            :data-tab="label"
        >
            <span>{{ label }}</span>
        </div>
    </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
    name: 'py-tab',

    props: {
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },

    setup (props) {
        const currentTab = inject('__currentTab')
        const activateTab = inject('__activateTab')
        
        return {
            onClickTab: () => activateTab(props.name),
            tabIsActive: computed(() => {
                return currentTab.name === props.name
            })
        }
    }
}
</script>

<style lang="scss"  scoped>
@import './style.scss';
</style>
