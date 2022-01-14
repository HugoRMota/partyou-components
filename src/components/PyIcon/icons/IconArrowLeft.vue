<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        :width="width" 
        :height="height"
        :class="iconColor"
        class="stroke-current"
        fill="none"
    >
        <path d="M13.5 8H2.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 3.5L2.5 8L7 12.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-arrow-left',

    props: {
        width: {
            type: Number,
            required: true
        },

        height: {
            type: Number,
            required: true
        },

        iconColor: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>