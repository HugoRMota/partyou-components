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
        <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.4431 16.4438L20.9994 21.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-magnifyin-glass',

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