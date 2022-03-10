<template>
	<header class="fixed top-0 left-0 w-full z-50" :class="color ? `bg-${color}` : 'bg-white'">
		<div
			class="max-w-screen-2xl p-4 mx-auto flex items-center gap-4 transition-all duration-200 justify-between"
			:class="offset ? 'py-2 px-4' : 'px-4 py-5'"
		>
			<button
				class="flex-none border-none bg-transparent inline-flex items-center justify-center px-3 py-2 gap-2 lg:hidden"
			>
				<span class="inline-flex flex-none flex-col gap-1.5 w-6">
					<span class="w-full h-0.5" :class="color ? 'bg-white' : 'bg-py-blue'"></span>
					<span class="w-2/3 h-0.5" :class="color ? 'bg-white' : 'bg-py-blue'"></span>
				</span>
				<span class="text-sm leading-5" :class="color ? 'text-white' : 'text-py-blue'"
					>Menu</span
				>
			</button>
			<a
				href="#"
				class="h-8 lg:h-10 w-auto flex-none inline-flex items-center justify-center"
			>
				<img :src="partyouLogo" alt="Partyou - Home" class="h-full w-auto" />
			</a>
			<div class="flex-1 hidden lg:block">
				<slot :defaultLinks="defaultNavLinks" :navLinks="navLinks">
					<ul class="items-center gap-4 flex">
						<li class="flex-none" v-for="(link, index) in navLinks" :key="index">
							<component
								:is="link.tag || 'router-link'"
								v-bind="link.props || { to: '/' }"
								class="text-lg leading-6 transition-all duration-200 font-medium inline-flex items-center justify-center p-4"
								:class="
									!!color
										? 'text-white hover:opacity-80'
										: 'text-black hover:text-py-blue'
								"
							>
								<span>{{ link.label }}</span>
							</component>
						</li>
					</ul>
				</slot>
			</div>
			<div class="lg:ml-auto flex-none flex items-center gap-3 lg:gap-6">
				<slot name="actions" />
				<button
					class="lg:hidden w-10 h-10 box-content p-1 text-center rounded-full inline-flex items-center justify-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="w-6 h-auto"
						:class="color ? 'fill-white' : 'fill-py-blue'"
					>
						<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
						<path
							d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z"
						/>
					</svg>
				</button>
				<component
					:is="btnTag"
					v-bind="btnProps"
					href="#"
					class="hidden lg:inline-flex"
				></component>
			</div>
		</div>
		<slot name="submenu" />
	</header>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import logoWhite from '@/assets/images/partyou-logo-white.svg'
import logo from '@/assets/images/partyou-logo.svg'

export default {
	name: 'py-header',

	props: {
		color: {
			type: String,
			required: false,
		},

		navPrepend: {
			type: Array,
			default: [],
		},

		navAppend: {
			type: Array,
			default: [],
		},
	},

	setup(props) {
		const offset = ref(false)
		const partyouLogo = ref(props.color ? logoWhite : logo)
		const btnTag = ref(props.color ? 'py-button' : 'py-button-gradient')
		const defaultNavLinks = ref([
			{
				label: 'Funcionalidades',
				tag: 'a',
				props: {
					target: '_blank',
					href: '#',
				},
			},
			{
				label: 'Sobre a Partyou',
				tag: 'a',
				props: {
					target: '_blank',
					href: '#',
				},
			},
			{
				label: 'Blog',
				tag: 'a',
				props: {
					target: '_blank',
					href: '#',
				},
			},
		])

		const navLinks = computed(() => {
			return [
				...(Array.isArray(props.navPrepend) ? props.navPrepend : []),
				...defaultNavLinks.value,
				...(Array.isArray(props.navAppend) ? props.navAppend : []),
			]
		})

		const btnProps = ref({
			label: 'Login/Criar Conta',
			fontSize: 'text-base',
			height: 48,
			width: 180,
			weight: 'medium',
		})

		if (props.color) {
			btnProps.value.color = 'white'
			btnProps.value.textColor = props.color
			btnProps.value.overlayColor = props.color
		} else {
			btnProps.value.colors = ['py-blue', 'py-blue-light']
			btnProps.value.direction = 'right'
		}

		const onResize = () => (offset.value = window.scrollY > 36)

		onResize()
		onMounted(() => window.addEventListener('scroll', onResize))
		onBeforeUnmount(() => window.removeEventListener('scroll', onResize))

		return {
			btnProps,
			btnTag,
			partyouLogo,
			offset,
			navLinks,
			defaultNavLinks,
		}
	},
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
