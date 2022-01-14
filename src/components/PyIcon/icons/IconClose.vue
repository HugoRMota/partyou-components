<template>
    <svg 
        viewBox="0 0 15 16" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width" 
        :height="height"
        class="fill-current"
        :class="iconColor"
    >
        <path d="M0.707078 14.3639C0.318169 13.975 0.318169 13.3386 0.707078 12.9497L12.0208 1.63602C12.4097 1.24711 13.0461 1.24711 13.435 1.63602C13.8239 2.02493 13.8239 2.66132 13.435 3.05023L2.12129 14.3639C1.73238 14.7528 1.09599 14.7528 0.707078 14.3639Z"/>
        <path d="M0.707078 1.63606C0.318169 2.02497 0.318169 2.66137 0.707078 3.05028L12.0208 14.364C12.4097 14.7529 13.0461 14.7529 13.435 14.364C13.8239 13.9751 13.8239 13.3387 13.435 12.9498L2.12129 1.63606C1.73238 1.24715 1.09599 1.24715 0.707078 1.63606Z"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-close',

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