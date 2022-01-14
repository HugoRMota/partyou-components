<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 5" 
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <ellipse cx="2.53846" cy="2.5" rx="2.53846" ry="2.5"/>
        <ellipse cx="10.9999" cy="2.5" rx="2.53846" ry="2.5"/>
        <ellipse cx="19.4613" cy="2.5" rx="2.53846" ry="2.5"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-options-horizontal',

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