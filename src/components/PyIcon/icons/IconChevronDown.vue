<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 9"
        :width="width" 
        :height="height"
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7498 0.252831C14.91 0.412486 15 0.629129 15 0.85504C15 1.08095 14.91 1.2976 14.7498 1.45725L8.10335 8.08367C7.94337 8.24351 7.72628 8.33331 7.4999 8.33331C7.27353 8.33331 7.05643 8.24351 6.89645 8.08367L0.249958 1.45725C-0.0833187 1.12466 -0.0833187 0.585422 0.249958 0.252831C0.583235 -0.0797596 1.12358 -0.0797596 1.45686 0.252831L7.4999 6.27705L13.5365 0.252831C13.6968 0.0910358 13.9152 -2.00272e-05 14.1432 -2.00272e-05C14.3711 -2.00272e-05 14.5896 0.0910358 14.7498 0.252831Z"/>
    </svg>

</template>

<script>
export default {
    name: 'icon-chevron-down',

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