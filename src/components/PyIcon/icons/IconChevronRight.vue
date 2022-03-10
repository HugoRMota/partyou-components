<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 12"
        :width="width" 
        :height="height"
        class="fill-current"
        :class="iconColor"
    >
        <path d="M0.999537 0.999819C0.610264 1.38909 0.60992 2.02012 0.998767 2.40982L4.17009 5.58807C4.55959 5.97842 4.55959 6.61039 4.17009 7.00074L0.998763 10.179C0.609918 10.5687 0.610263 11.1997 0.999535 11.589V11.589C1.38911 11.9786 2.02073 11.9786 2.41031 11.589L6.99778 7.00151C7.3883 6.61099 7.3883 5.97782 6.99778 5.5873L2.41031 0.99982C2.02073 0.610246 1.38911 0.610246 0.999537 0.999819V0.999819Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-chevron-right',

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