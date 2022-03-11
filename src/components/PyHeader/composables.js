import { ref } from 'vue'

export const sidenav = ref(false)
export const userMenu = ref(false)

export const toggleUserMenu = () => (userMenu.value = !userMenu.value)
export const openUserMenu = () => (userMenu.value = true)
export const closeUserMenu = () => (userMenu.value = false)

export const toggleSidenav = () => (sidenav.value = !sidenav.value)
export const openSidenav = () => (sidenav.value = true)
export const closeSidenav = () => (sidenav.value = false)
