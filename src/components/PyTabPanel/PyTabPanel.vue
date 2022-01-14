<template>
    <div class="tabPanel" v-show="seletedTab === name">
        <slot />
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'py-tab-panel',

    props: {
        name: {
            type: String,
            default: ''
        }
    },

    setup () {
        const seletedTab = inject('seletedTab')

        return {
            seletedTab
        }
    }
}
</script>
