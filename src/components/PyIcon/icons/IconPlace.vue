<template>
    <svg 
        viewBox="0 0 15 22" 
        xmlns="http://www.w3.org/2000/svg"
        :width="width"         
        :height="height" 
        class="fill-current"
        :class="iconColor"
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333C14.6667 10.0334 12.2222 14.9223 7.33333 22C2.44444 14.9223 0 10.0334 0 7.33333C0 3.28325 3.28325 0 7.33333 0ZM7.33333 4.03333C5.51079 4.03333 4.03333 5.51079 4.03333 7.33333C4.03333 9.15587 5.51079 10.6333 7.33333 10.6333C9.15587 10.6333 10.6333 9.15587 10.6333 7.33333C10.6333 5.51079 9.15587 4.03333 7.33333 4.03333Z" />
    </svg>
</template>

<script>
export default {
    name: 'icon-place',

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