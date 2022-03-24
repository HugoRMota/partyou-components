import { ref } from 'vue'

const sidenav = ref(false)
const userMenu = ref(false)

const toggleUserMenu = () => (userMenu.value = !userMenu.value)
const openUserMenu = () => (userMenu.value = true)
const closeUserMenu = () => (userMenu.value = false)

const toggleSidenav = () => (sidenav.value = !sidenav.value)
const openSidenav = () => (sidenav.value = true)
const closeSidenav = () => (sidenav.value = false)

const usePyHeader = () => ({
    sidenav,
    userMenu,
    toggleSidenav,
    toggleUserMenu,
    openSidenav,
    openUserMenu,
    closeSidenav,
    closeUserMenu
})

export default usePyHeader
