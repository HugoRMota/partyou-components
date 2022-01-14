<template>
    <svg 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :width="width" 
        :height="height"
        class="stroke-current"
        fill="none"
        :class="iconColor"
    >
        <path d="M16.3152 8.0625L20.2527 12L16.3152 15.9375" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.75 12H20.25" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.25 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H11.25" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-sign-out',

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