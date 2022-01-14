<template>
	<div 
		class="avatar"
		:class="cssClasses"
		:style="style"
	>
		<slot>
			<py-icon v-if="icon" :name="icon" :size="iconSize"/>
			<span v-else-if="text">{{ text }}</span>
		</slot>
	</div>
</template>

<script>
import PyIcon from './../PyIcon'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default {
	name: 'py-avatar',

	props: {
		image: {
			type: String,
			default: ''
		},

		icon: {
			type: String,
			default: ''
		},

		iconSize: {
			type: Number,
			default: 24
		},

		label: {
			type: String,
			default: ''
		},

		color: {
			type: String,
			default: 'gray-200'
		},

		fontColor: {
			type: String,
			default: 'gray-600'
		},

		size: {
			type: String,
			default: '3.5rem'
        },
        
        sizeSm: {
            type: String,
            default: ''
        },

        sizeMd: {
            type: String,
            default: ''
        },

        sizeLg: {
            type: String,
            default: ''
        },

        sizeXl: {
            type: String,
            default: ''
        },

		fontSize: {
			type: String,
			default: '1.5rem'
		},

		rounded: {
			type: Boolean,
			default: false
		},

		round: {
			type: Boolean,
			default: false
		}
	},

	components: {
		PyIcon
	},

	setup (props) {
        const localProps = { ...props }

		const {
			label,
			color,
			fontColor,
            size,
            sizeSm,
            sizeMd,
            sizeLg,
            sizeXl,
			rounded,
			round,
			image,
			fontSize,
        } = localProps
        
        const getSizeByWindow = () => {
            const windowWidth = window.innerWidth
            let sizeByWindow = size

            if (windowWidth >= 640 && sizeSm) {
                sizeByWindow = sizeSm
            }

            if (windowWidth >= 768 && sizeMd) {
                sizeByWindow = sizeMd
            }

            if (windowWidth >= 1024 && sizeLg) {
                sizeByWindow = sizeLg
            }

            if (windowWidth >= 1280 && sizeXl) {
                sizeByWindow = sizeXl
            }

            return sizeByWindow
        }

        const currentSize = ref(getSizeByWindow())

		const classList = [
			`bg-${color}`, 
			`text-${fontColor}`
		]

		const style = computed(() =>{
            return {
                width: currentSize.value,
                height: currentSize.value,
                fontSize: fontSize,
                backgroundImage: image ?  `url("${image}")` : ''
            }
        })

		const iconStyle = {
			width: 'auto',
			height: fontSize
		}

		if (rounded) {
			classList.push('rounded-full')
		} else if (round) {
			classList.push('rounded')
        }

        const onResize = () => currentSize.value = getSizeByWindow()

        onMounted(() => window.addEventListener('resize', onResize))
        onBeforeUnmount(() => window.removeEventListener('resize', onResize))

		return {
			style,
			iconStyle,
			cssClasses: classList.join(' '),
			text: label.trim()[0] || ''
		}
	}
}
</script>

<style scoped>
@import './style.scss';
</style>