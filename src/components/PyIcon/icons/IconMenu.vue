<template>
    <svg 
        viewBox="0 0 19 13" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width" 
        :height="height"
        class="stroke-current"
        :class="iconColor"
    >
        <path d="M1.85889 1.53809H17.8589" stroke-width="2" stroke-linecap="round"/>
        <path d="M1.85889 11.5381H13.8589" stroke-width="2" stroke-linecap="round"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-menu',

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