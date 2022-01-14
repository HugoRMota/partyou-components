<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 20" 
        :width="width" 
        :height="height"
        class="stroke-current"
        fill="none"
        :class="iconColor"
    >
        <path d="M12.3497 18.3072C11.5897 18.9972 10.4197 18.9972 9.65973 18.2972L9.54973 18.1972C4.29973 13.4472 0.869726 10.3372 0.999726 6.45717C1.05973 4.75717 1.92973 3.12717 3.33973 2.16717C5.97973 0.367168 9.23973 1.20717 10.9997 3.26717C12.7597 1.20717 16.0197 0.357168 18.6597 2.16717C20.0697 3.12717 20.9397 4.75717 20.9997 6.45717C21.1397 10.3372 17.6997 13.4472 12.4497 18.2172L12.3497 18.3072Z" stroke-width="1.5"/>
    </svg>
</template>

<script>
export default {
    name: 'icon-outline-favorite',

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
