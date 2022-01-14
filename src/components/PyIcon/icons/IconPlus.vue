<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 18"
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path d="M10.324 18V10.7265H17V7.27347H10.324V0H6.63948V7.27347H0V10.7265H6.63948V18H10.324Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-plus',

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