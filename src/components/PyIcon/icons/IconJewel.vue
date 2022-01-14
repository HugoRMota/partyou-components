<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 17" 
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0367 0.00313822H16.3722L13.1064 3.76961L10.4503 0.220853C10.4286 0.17731 10.385 0.133767 10.3197 0.0902242C10.102 -0.0621764 9.79718 -0.0186334 9.62301 0.199082L7.09751 3.76961L3.87533 0.00313822H10.0367ZM17.1995 0.547426L20.3128 4.07441H14.1515L17.1995 0.547426ZM20.3346 5.0759L10.4068 16.8107C10.2326 17.0285 9.90604 17.0502 9.71009 16.8761C9.68832 16.8543 9.64478 16.8107 9.62301 16.789L0 5.0759H6.79271L9.53592 16.593C9.57946 16.7672 9.71009 16.9196 9.90604 16.9849C10.1673 17.0502 10.4503 16.8978 10.5156 16.6366L13.5201 5.09767H20.3346V5.0759ZM0 4.07441L3.02624 0.547426L6.05248 4.07441H0ZM8.099 4.07441H12.105L10.0584 1.3312L8.099 4.07441ZM12.4968 5.0759H7.81597L10.0584 14.4376L12.4968 5.0759Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-jewel',

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