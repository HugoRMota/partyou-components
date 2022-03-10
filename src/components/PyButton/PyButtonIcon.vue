<template>
    <router-link 
        v-if="to" 
        :to="to" 
        :class="classList" 
        :style="style"
        class="py-btn"
    >
        <span class="overlay" :class="`bg-${overlayColor}`"></span>
        <py-icon 
            :key="iconKey"
            :name="icon"
            :size="iconSize"
        />
    </router-link>
    <a 
        v-else-if="href" 
        target="_blank"
        :class="classList" 
        :style="style"
        class="py-btn"
    >
        <span class="overlay" :class="`bg-${overlayColor}`"></span>
        <py-icon 
            :key="iconKey"
            :name="icon"
            :size="iconSize"
        />
    </a>
    <button
        v-else
        :class="classList" 
        :style="style"
        :type="type"
        class="py-btn"
        @click="onClick"
        :disabled="disabled"
    >
        <span class="overlay" :class="`bg-${overlayColor}`"></span>
        <py-icon 
            :key="iconKey"
            :name="icon"
            :size="iconSize"
        />
    </button>
</template>

<script>
import { watch, computed, ref } from 'vue'
import PyIcon from '../PyIcon'

export default {
    name: 'py-button-icon',

    props: {
        size: { type: Number, default: 44 },
        iconSize: { type: Number, default: 20 },
        color: { type: String, default: 'black' },
        iconColor: { type: String, default: 'white' },
        hoverIconColor: { required: false },
        overlayColor: { type: String, default: 'white' },
        icon: { type: String, default: '' },
        type: { type: String, default: 'button' },
        disabled: { type: Boolean, default: false }
    },

    components:{
        PyIcon
    },

    setup (props, { attrs, emit }) {
        const { to, href } = attrs
        const iconKey = ref(0)

        const setStyles = () => ({
            width: `${props.size}px`,
            height: `${props.size}px`
        })

        const setClasses = () => [
            `bg-${props.color}`, 
            'rounded-full', 
            `text-${props.iconColor}`,
            `hover:text-${props.hoverIconColor || props.iconColor}`
        ]

        const classes = ref(setClasses())
        const style = ref(setStyles())

        watch(props, () => {
            classes.value = setClasses()
            style.value = setStyles()
            iconKey.value += 1
        })

        const classList = computed(() => {
            return classes.value.join(' ')
        })

        return {
            style,
            classList,
            to, 
            href,
            iconKey,
            onClick: () => emit('on-click')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>