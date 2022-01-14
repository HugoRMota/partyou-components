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
        <path d="M17.343 3.47489L13.4091 7.40882L13.9394 10.0605L16.5911 10.5908L20.525 6.65687L20.5254 6.65671C21.0123 7.80611 21.1288 9.07873 20.8585 10.2974C20.5883 11.5161 19.9448 12.6202 19.0177 13.4561C18.0906 14.2919 16.9259 14.818 15.6859 14.9609C14.4458 15.1039 13.192 14.8566 12.099 14.2536L12.0991 14.2534L6.84106 20.3408C6.41902 20.7624 5.84685 20.9991 5.25034 20.9989C4.65382 20.9987 4.08179 20.7617 3.65999 20.3399C3.23819 19.9181 3.00115 19.3461 3.00098 18.7495C3.00081 18.153 3.23752 17.5809 3.65908 17.1588L9.7464 11.9008L9.74627 11.9009C9.14326 10.8079 8.89603 9.5541 9.03897 8.31402C9.18191 7.07394 9.70793 5.90929 10.5438 4.98216C11.3796 4.05504 12.4838 3.41158 13.7025 3.14135C14.9211 2.87113 16.1938 2.98758 17.3432 3.47451L17.343 3.47489Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-wrench',

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