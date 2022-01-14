<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 17" 
        :width="width" 
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5714 9.71429H12.1429V7.28571H9.71429V9.71429H7.28571V12.1429H9.71429V14.5714H7.28571H4.85714V12.1429V9.71429H2.42857H0V7.28571V4.85714V2.42857V0H2.42857H4.85714H7.28571H9.71429V2.42857V4.85714H12.1429V2.42857H14.5714V4.85714H17V7.28571V9.71429V12.1429H14.5714V9.71429ZM14.5714 2.42857V0H17V2.42857H14.5714ZM2.42857 14.5714L4.85714 14.5714V17H2.42857V14.5714ZM2.42857 14.5714H0V12.1429H2.42857V14.5714ZM9.71429 14.5714H12.1429V17H9.71429V14.5714ZM9.71429 12.1429V9.71429H12.1429V12.1429H9.71429ZM2.42857 2.42857V4.85714V7.28571H4.85714H7.28571V4.85714V2.42857H4.85714H2.42857ZM17 14.5714H14.5714V17H17V14.5714ZM6.07143 3.64286H3.64286V6.07143H6.07143V3.64286Z"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-qrcode',

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