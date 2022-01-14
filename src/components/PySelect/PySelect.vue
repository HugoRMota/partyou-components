<template>
    <div
        v-click-away="onClickAway"
        ref="pySelect"
        class="py-select"
        :class="[ fullWidth && 'w-full']"
        :style="{
            width: !fullWidth && width,
            height
        }"
    >
         <label :for="label" class="label">{{ label }}</label>
         <button  
               type="button"
               class="py-select__input"
              :class="[ 
                    elevate && 'shadow-2xl', 
                    `rounded-${rounded}`,  
                    `bg-${color}`,
                    `text-${textColor}`,
                    `border-${borderColor}`,
                    `focus:ring-${focusColor} focus:border-${focusColor}`
                ]" 
                @click="toggleOptions">
            
            <span class="block truncate" >{{ labelByValue }}</span>
            <div  class="py-select__input__arrow">
                <slot name="icon">
                    <py-icon
                        :class="toggle ? 'rotate-0':'rotate-180'" 
                        :name="icon"
                        :size="15"
                        :color="iconColor"
                        class="transition transform duration-200"
                    />
                </slot>
            </div>
        </button>
        <div class="py-select__fade" v-if="toggle" @click="toggle = false"></div>
       <transition
          enter-active-class="transform transition duration-300 ease-custom"
          enter-class="translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="-translate-y-0 scale-y-100 opacity-100"
          leave-active-class="-transform transition duration-300 ease-custom"
          leave-class="-translate-y-0 scale-y-100 opacity-100"
          leave-to-class="translate-y-1/2 scale-y-0 opacity-0"
             >
        <div class="py-select__options" v-show="toggle" :class="[ toggle && 'show', position ]">
            <ul>
                <li 
                    v-for="(option, index) in options" 
                    :key="index"
                    @click="selectValue(option.value)"
                    :class="[
                        option.value === modelValue && 'selected',
                        option.value === modelValue && `text-${color === 'white' ? 'gray-600' : color}`
                    ]"
                >
                    <span
                        class="overlay"
                        v-if="option.value === modelValue" 
                        :class="overlayColor ? `bg-${overlayColor}` : `bg-${color === 'white' ? 'gray-800' : color}`"
                    >
                    </span>
                    {{ option.label }}
                </li>
            </ul>
        </div>
       </transition>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { directive } from 'vue3-click-away'
import PyIcon from "../PyIcon/PyIcon.vue"
 
export default {
    name: 'py-select',
    
    emits: ['update:modelValue', 'on-select'],
    
    directives: {
        ClickAway: directive
    },

    components:{
        PyIcon         
    },
    
    props: {
        modelValue: { required: false },
        options: { type: Array, default: () => [] },
        label: {type: String, default:""},

        rounded: { type: String, default: "md" },
        elevate: { type: Boolean, default: false },
        fullWidth: { type: Boolean, default: false },

        width: { type: String, default: '180px' },
        height: { type: String, default: '40px' },
        textSize: { type: String, default: '18px' },

        textColor: { type: String, default: 'gray-800' },
        color: { type: String, default: 'white' },
        iconColor: { type: String, default: 'gray-400' },
        icon: { type: String, default: 'chevron-down' },
        borderColor:{ type: String, default: 'gray-500'},
        focusColor:{ type: String, default: 'indigo-500'},
        overlayColor: { type: String, required: false }
    },

    setup(props, { emit }) {
        const pySelect = ref(null)
        const toggle = ref(false)
        const position = ref('')

        const labelByValue = computed(() => {
            const item = props.options.find(i => i.value === props.modelValue)
            return item.label
        })

        const selectValue = (v) => {
            toggle.value = false
            emit('update:modelValue', v)
        }

        const emitOnChange = () => {
            const option = props.options.find(item => item.value === props.modelValue)
            emit('on-select', option)
        }

        watch(toggle, () => {
            if (!toggle.value) {
                const options = pySelect.value.querySelector('ul')

                position.value = ''
                options.style.maxHeight = ''
            }
        })

        watch(labelByValue, emitOnChange)

        const onClickAway = () => {
            toggle.value = false
        }

        const toggleOptions = () => {
            const options = pySelect.value.querySelector('ul')

            const oHeight = options.offsetHeight + 24
            const rect = pySelect.value.getBoundingClientRect()
            const fromBottom = window.innerHeight - rect.bottom
            const fromTop = rect.top

            if (window.innerWidth >= 768) {
                if (toggle.value) {
                    toggle.value = false
                } else {
                    if (oHeight > fromBottom) {
                        if (fromTop > fromBottom) {
                            position.value = 'top'
                            options.style.maxHeight = fromTop < oHeight && (fromTop - 24) + 'px'
                        } else {
                            position.value = 'bottom'
                            options.style.maxHeight = (fromBottom - 24) + 'px'
                        }
                    } else {
                        position.value = 'bottom'
                    }
        
                    toggle.value = true
                }
            } else {
                toggle.value = !toggle.value
            }
        }

        return {
            labelByValue,
            selectValue,
            emitOnChange,
            toggle,
            toggleOptions,
            pySelect,
            position,
            onClickAway,
        }
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>