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
        <path d="M7.48438 9.34814H2.98438V4.84814" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.8336 6.16637C17.0675 5.40029 16.1581 4.7926 15.1571 4.37799C14.1562 3.96339 13.0834 3.75 12 3.75C10.9166 3.75 9.84378 3.96339 8.84285 4.37799C7.84191 4.7926 6.93244 5.40029 6.16635 6.16637L2.98438 9.34835" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5156 14.6519H21.0156V19.1519" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.16626 17.8338C6.93234 18.5999 7.84182 19.2076 8.84275 19.6222C9.84369 20.0368 10.9165 20.2502 11.9999 20.2502C13.0833 20.2502 14.1561 20.0368 15.157 19.6222C16.158 19.2076 17.0674 18.5999 17.8335 17.8338L21.0155 14.6519" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>


</template>

<script>
export default {
    name: 'icon-counter-clockwise',

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