<template>
	<div
		v-click-away="onClickAway"
		ref="pySelect"
		class="py-select"
		:class="[fullWidth && 'w-full']"
		:style="{ width: !fullWidth && width }"
	>
		<label v-if="label" for="">{{ label }}</label>
		<div
			class="py-select__input"
			@click.stop="toggleOptions"
			:style="{ height, fontSize: textSize }"
			:class="[
				elevate && 'shadow-2xl',
				`rounded-${borderRadius}`,
				`bg-${color}`,
				`text-${textColor}`,
				`border-${borderColor}`
			]"
		>
			<span class="py-select__input--selected" :class="{ 'opacity-60': toggle }">{{ labelByValue }}</span>
				<!-- @keyup.space="toggleOptions" -->
			<input
				type="text"
				:readonly="disabled"
				:style="{ fontSize: textSize }"
				v-model="search"
				ref="searchInput"
			/>
			<div class="py-select__input--arrow">
				<slot name="icon">
					<py-icon
						:name="icon"
						:size="12"
						:color="iconColor"
						:class="toggle ? '-rotate-180' : 'rotate-0'"
						class="transition transform duration-200"
					/>
				</slot>
			</div>
		</div>
		<div class="py-select__fade" v-if="toggle" @click="toggle = false"></div>
		<div class="py-select__options" :class="[toggle && 'show', position]">
			<ul>
				<li
					v-for="(option, index) in filteredOptions"
					:key="index"
					@click="selectValue(option.value)"
					class="py-select__options--option"
					:class="[
						option.value === modelValue && 'selected',
						option.value === modelValue &&
							`text-${color === 'white' ? 'gray-600' : color}`,
					]"
				>
					<span
						class="overlay"
						v-if="option.value === modelValue"
						:class="
							overlayColor
								? `bg-${overlayColor}`
								: `bg-${color === 'white' ? 'gray-800' : color}`
						"
					>
					</span>
					{{ option.label }}
				</li>
				<li class="py-select__options--empty" v-if="filteredOptions.length === 0">{{ noOptions }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { computed, nextTick, ref, watch } from 'vue'
import { directive } from 'vue3-click-away'
import { usePyI18n } from '@/i18n'

import PyIcon from "../PyIcon/PyIcon.vue";

export default {
	name: 'py-select',

	emits: ['update:modelValue', 'on-select'],

	directives: {
		ClickAway: directive,
	},

	components: {
		PyIcon,
	},

	props: {
		modelValue: { required: false },
		options: { type: Array, default: () => [] },
		label: { type: String, required: false },

		elevate: { type: Boolean, default: false },
		fullWidth: { type: Boolean, default: false },
		searchable: { type: Boolean, default: false },

		width: { type: String, default: '180px' },
		height: { type: String, default: '40px' },
		textSize: { type: String, default: '18px' },

		textColor: { type: String, default: 'gray-800' },
		color: { type: String, default: 'white' },
		iconColor: { type: String, default: 'gray-400' },
		icon: { type: String, default: 'chevron-down' },

		overlayColor: { type: String, required: false },
		borderColor: { type: String, default: 'black'},
		borderRadius: { type: String, default: 'md' },
		noOptionsMessage: { type: String, required: false }
	},

	setup(props, { emit }) {
		const { t } = usePyI18n()

		const pySelect = ref(null)
		const searchInput = ref(null)
		const toggle = ref(false)
		const position = ref('')
		const search = ref('')

		const labelByValue = computed(() => {
			const item = props.options.find((i) => i.value === props.modelValue)
			return item.label
		})

		const filteredOptions = computed(() => {
			const searchStr = search.value.trim().toLocaleLowerCase()

			return props.options.filter(option => String(option.label).toLocaleLowerCase().includes(searchStr))
		})

		const disabled = computed(() => props.searchable ? !toggle.value : true)

		const noOptions = computed(() => props.noOptionsMessage || t('noOptions'))

		const selectValue = (v) => {
			toggle.value = false
			emit('update:modelValue', v)
		}

		const emitOnChange = () => {
			const option = props.options.find((item) => item.value === props.modelValue)
			emit('on-select', option)
		}

		watch(toggle, () => {
			if (toggle.value) {
				if (props.searchable) {
					nextTick(() => searchInput.value.focus())
				}
			} else {
				const options = pySelect.value.querySelector('ul')

				search.value = ''
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
							options.style.maxHeight = fromTop < oHeight && fromTop - 24 + 'px'
						} else {
							position.value = 'bottom'
							options.style.maxHeight = fromBottom - 24 + 'px'
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
			filteredOptions,
			search,
			disabled,
			searchInput,
			noOptions
		}
	},
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
