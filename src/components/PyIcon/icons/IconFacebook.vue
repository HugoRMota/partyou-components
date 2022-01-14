<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 19" 
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.20625H8.19277C6.74699 3.20625 6.50602 3.91875 6.50602 4.86875V7.00625H9.87952L9.39759 10.3313H6.50602V19H3.01205V10.3313H0V7.00625H3.01205V4.5125C2.89157 1.54375 4.6988 0 7.3494 0C8.55422 0 9.63855 0.11875 10 0.11875V3.20625Z" />
    </svg>
</template>

<script>
export default {
    name: 'icon-facebook',

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