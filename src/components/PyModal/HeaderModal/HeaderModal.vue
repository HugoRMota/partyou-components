<template>
    <div class="appUserHeader">
        <div class="appUserHeader__btn">
            <py-icon 
                v-if="headerIcon"
                :name="headerIcon"
                :size="16"
                color="black"
                class="btn-icon"
            />
            <span class="label"><slot>{{ headerText }}</slot></span>
        </div>
        <div>
            <h1><slot>{{ headerTitle }}</slot></h1>
            <span><slot>{{ headerSubtitle }}</slot></span>
        </div>
    </div>
</template>

<script setup>
import PyIcon from "../../PyIcon/PyIcon.vue"

defineProps({
    headerText: {
        type: String,
        default: ''
    },

    headerTitle: {
        type: String,
        default: ''
    },
    headerSubtitle: {
        type: String,
        default: ''
    },

    headerIcon: {
        type: String,
        required: false
    }
})
</script>

<style lang="scss" scoped>
    @import './style.scss';
</style>