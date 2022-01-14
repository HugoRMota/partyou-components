<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 10" 
        :width="width" 
        :height="height"
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.707107 3.36394C0.316582 3.75446 0.316582 4.38763 0.707107 4.77815L5.65685 9.7279L7.07107 8.31368L7.07106 8.31368L13.0209 2.36386C13.4114 1.97334 13.4114 1.34017 13.0209 0.94965C12.6303 0.559126 11.9972 0.559126 11.6067 0.94965L5.65684 6.89946L2.12132 3.36394C1.7308 2.97341 1.09763 2.97341 0.707107 3.36394Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-check',

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