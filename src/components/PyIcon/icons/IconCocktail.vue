<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 20" 
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.54667V0H13.3333V4.54V7.56C13.3333 10.9733 10.6008 13.7733 7.14727 14.0133V19.26H9.92791V20H3.40542V19.26H6.18606V14.02C2.73258 13.78 0 10.98 0 7.56667V4.54667ZM3.0484 7.66667L4.31171 8.36667L5.03261 7.14L3.76931 6.44L3.0484 7.66667ZM8.21833 10.4267L7.29832 9.92L7.82012 9.02667L8.74013 9.53333L8.21833 10.4267ZM10.8342 3.03333C11.3972 2.98 11.9602 3.22 12.5369 3.77333L12.53 0.793333H0.79643V3.86C1.42808 3.28667 2.0254 3.05333 2.60213 3.13333C3.18011 3.21917 3.51565 3.59272 3.79551 3.90428L3.80364 3.91333C4.05081 4.19333 4.21559 4.36667 4.44902 4.37333C4.67559 4.38 4.8541 4.21333 5.14246 3.92C5.15278 3.90976 5.16318 3.89942 5.17366 3.889C5.4769 3.5874 5.84922 3.21711 6.43323 3.13333C7.13354 3.02667 7.57295 3.48667 7.9231 3.85333C8.23206 4.18 8.43804 4.38 8.71953 4.37333C9.0079 4.36667 9.207 4.16 9.5091 3.84L9.52072 3.82773C9.83436 3.49661 10.217 3.0926 10.8342 3.03333Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-cocktail',

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