 
<template>
	<div class="py-input">
		<div class="py-input-content">
			<textarea 
				v-if="textarea"
				:name="name"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"		
				:style="style"
				:placeholder="placeholder"
				:class="`custom-input ${variant} ${error ? 'error' : ''}`"
				v-mask="mask ? vmask : ''"
				:readonly="disableInput"
			></textarea>
			<input
				v-else
				:name="name"
				:style="style"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				@keyup.enter="$emit('on-keyup-enter')"
				:type="type" 
				:class="`custom-input ${variant} ${error ? 'error' : ''}`"
				:placeholder="placeholder"
				v-mask="mask ? vmask : ''"
				:readonly="disableInput"
			>
			<div class="icon" :class="{ 'hidden': !hasIconSlot }">
				<slot name="icon"/>
			</div>
		</div>
		<span class="hint error-message" v-if="error">{{ te(error) ? t(error) : error }}</span>
		<span class="hint" v-else-if="hintMessage">{{ hintMessage }}</span>
	</div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { VueMaskDirective } from 'v-mask'
/* import PyIcon from './../PyIcon/PyIcon.vue' */
export default {
	name: 'py-input',
	emits: ['update:modelValue', 'on-keyup-enter'],
	
	props: {
		textarea: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			defaut: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		},
		variant: {
			type: String,
			default: ''
		},
		height: {
			type: Number,
			default: 59
		},
		modelValue: {
			required: false
		},
		errorMessage: {
			required: false
		},
		hintMessage: {
			required: false
		},
		mask: {
			required: false
		},
		readonly: {
			type: Boolean,
			default: false
		}
	},
	directives: {
		mask: {
			beforeMount: VueMaskDirective.bind,
			updated: VueMaskDirective.componentUpdated,
			unmounted: VueMaskDirective.unbind
		}
	},
	setup (props, { attrs, slots }) {
		const { t, te } = useI18n()
		const error = ref(props.errorMessage)
		const disableInput = ref(props.readonly)
		const vmask = ref(props.mask)
		const style = {
			height: `${props.height}px`
		}
		watch(() => props.mask, () => {
			vmask.value = props.mask
		})
		watch(() => props.errorMessage, () => {
			error.value = props.errorMessage
		})
		watch(() => props.readonly, () => {
			disableInput.value = props.readonly
		})
		const hasIconSlot = computed(() => slots.icon && slots.icon().length > 0)
		return {
			style,
			name: attrs.name || '',
			error,
			t,
			te,
			vmask,
			hasIconSlot,
			disableInput
		}
	}
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
 