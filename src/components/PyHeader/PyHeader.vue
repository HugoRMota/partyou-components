<template>
  <header :class="[`bg-${color}`, fixed ? 'header-fixed' : '']">
    <div class="pyHeader" :class="{ offset }">
      <div class="pyHeader__menuBtn">
        <py-button-icon
          v-if="!hideMenuBtn"
          @on-click="openSidenav"
          icon="menu"
          :icon-size="20"
          :size="40"
          color="transparent"
          :icon-color="textColor"
        ></py-button-icon>
      </div>
      <div class="pyHeader__logo">
        <component :is="homeLink.tag" v-bind="homeLink.props">
          <img :src="partyouLogo" alt="Partyou - Home" />
        </component>
      </div>
      <div
        class="pyHeader__content"
        :class="[navBackground, sidenav ? 'open' : '']"
      >
        <div class="pyHeader__content--wrapper">
          <div class="nav-close">
            <py-button-icon
              color="transparent"
              :icon-color="textColor"
              icon="close"
              @on-click="closeSidenav"
            ></py-button-icon>
          </div>
          <div class="nav-content">
            <slot :defaultLinks="defaultNavLinks" :navLinks="navLinks">
              <ul>
                <li v-for="(link, index) in navLinks" :key="index">
                  <component
                    :is="link.tag || 'router-link'"
                    v-bind="link.props || { to: '/' }"
                    class="nav-link"
                    :class="`text-${textColor}`"
                  >
                    <span>{{ link.label }}</span>
                    <span class="nav-link-active"></span>
                  </component>
                </li>
              </ul>
            </slot>
            <div id="pyHeader-content" class="nav-actions"></div>
          </div>
        </div>
      </div>
      <div class="pyHeader__actions">
        <div id="pyHeader-actions"></div>
        <!-- <div
					v-if="userIsLogged"
					class="pyHeader__actions--user"
					v-click-away="closeUserMenu"
				>
					<py-button
						:height="isMobile ? 48 : 52"
						full-width
						color="transparent"
						:overlay-color="isMobile ? 'transparent' : 'white'"
						weight="normal"
						:text-color="textColor"
						@on-click="toggleUserMenu"
					>
						<div class="user-btn">
							<py-avatar
								v-if="userImage"
								:image="userImage"
								size="2.5rem"
								rounded
								class="avatar"
							></py-avatar>
							<py-avatar v-else size="2.5rem" rounded class="avatar">
								<ph-user :size="20"></ph-user>
							</py-avatar>
							<span>{{ userName }}</span>
							<ph-caret-down
								:size="20"
								weight="bold"
								class="caret"
								:class="{ toggle: userMenu }"
							></ph-caret-down>
						</div>
					</py-button>
					<div class="pyHeader__userMenu" :class="{ open: userMenu }">
						<div class="pyHeader__userMenu--wrapper">
							<div class="pyHeader__userMenu--header">
								<div class="userMenu-close">
									<py-button-icon
										color="transparent"
										icon-color="gray-400"
										hover-icon-color="red-400"
										icon="close"
										@on-click="closeUserMenu"
									></py-button-icon>
								</div>
								<div class="userMenu-image">
									<py-avatar
										v-if="userImage"
										:image="userImage"
										size-xl="3rem"
										size="4rem"
										rounded
										class="avatar"
									></py-avatar>
									<py-avatar
										v-else
										size-xl="3rem"
										size="4rem"
										rounded
										class="avatar"
									>
										<ph-user :size="20"></ph-user>
									</py-avatar>
								</div>
								<div class="userMenu-name">
									<p>{{ userName }}</p>
									<component
										:is="userBtn.tag"
										v-bind="userBtn.props"
										:class="`hover:text-${userMenuHoverColor}`"
										>{{ t('myAccount') }}</component
									>
								</div>
							</div>
							<py-divider></py-divider>
							<div class="pyHeader__userMenu--content">
								<div class="userMenu-links">
									<slot name="userMenu"> </slot>
								</div>
								<div class="userMenu-signOut">
									<py-menu>
										<py-menu-item
											@on-click="emitSignOut"
											:label="t('logout')"
											icon="sign-out"
											:hover-color="userMenuHoverColor"
										></py-menu-item>
									</py-menu>
								</div>
							</div>
						</div>
					</div>
				</div> -->
        <div class="pyHeader__actions--login" v-if="userIsLogged">
          <component
            :is="loginBtn.tag"
            v-bind="loginBtn.props"
            @on-click="emitSignOut"
          >
            <div class="login-btn">
              <ph-sign-out :size="24" class="icon" weight="bold" />
              <span class="label">{{ t("logout") }}</span>
            </div>
          </component>
        </div>
        <div class="pyHeader__actions--login" v-else>
          <component
            :is="loginBtn.tag"
            v-bind="loginBtn.props"
            @on-click="emitSignIn"
          >
            <div class="login-btn">
              <ph-sign-in :size="24" class="icon" weight="bold" />
              <span class="label">{{ t("login") }}</span>
            </div>
          </component>
        </div>
      </div>
    </div>

    <!-- <div></div> -->
    <slot name="submenu" />
  </header>
  <teleport :to="isMobile ? '#pyHeader-content' : '#pyHeader-actions'">
    <slot name="actions" />
  </teleport>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { directive } from "vue3-click-away";
import { PhSignIn, PhUser, PhCaretDown, PhSignOut } from "phosphor-vue";

import PyDivider from "../PyDivider";
import PyAvatar from "../PyAvatar";
import PyButton from "../PyButton/PyButton.vue";
import PyButtonGradient from "../PyButton/PyButtonGradient.vue";
import PyButtonIcon from "../PyButton/PyButtonIcon.vue";
import PyIcon from "../PyIcon/PyIcon.vue";
import PyMenu from "../PyMenu/PyMenu.vue";
import PyMenuItem from "../PyMenuItem/PyMenuItem.vue";
import logoWhite from "./../../assets/images/partyou-logo-white.svg";
import logo from "./../../assets/images/partyou-logo.svg";

import usePyHeader from "./composables";

import { usePyI18n } from "./../../i18n";

export default {
  name: "py-header",

  emits: ["offset", "sign-out", "sign-in"],

  directives: {
    ClickAway: directive,
  },

  props: {
    fixed: { type: Boolean, default: false },
    color: { type: String, default: "white" },
    textColor: { type: String, default: "black" },
    navPrepend: { type: Array, default: [] },
    navAppend: { type: Array, default: [] },
    localRoutes: { type: Boolean, default: false },
    loginColor: { type: [String, Array], default: "black" },
    loginTextColor: { type: String, default: "white" },
    userIsLogged: { type: Boolean, default: false },
    userImage: { type: String, required: false },
    sidenavColor: { type: String, required: false },
    userName: { type: String, default: "Bruno Henrique" },
    userMenuHoverColor: { type: String, default: "black" },
    hideMenuBtn: { type: Boolean, default: false },
  },

  components: {
    PyButton,
    PyButtonGradient,
    PyButtonIcon,
    PyIcon,
    PhSignIn,
    PhUser,
    PhCaretDown,
    PhSignOut,
    PyAvatar,
    PyMenu,
    PyMenuItem,
    PyDivider,
  },

  setup(props, { emit }) {
    const {
      userMenu,
      sidenav,
      openSidenav,
      closeSidenav,
      toggleUserMenu,
      closeUserMenu,
    } = usePyHeader();
    
    const { t } = usePyI18n();
    const offset = ref(false);
    const isMobile = ref(window.innerWidth < 1280);
    const partyouHome = import.meta.env?.VITE_PARTYOU_WEB_URL
      ? import.meta.env.VITE_PARTYOU_WEB_URL
      : "";

    const partyouLogo = ref(props.color === "white" ? logo : logoWhite);

    const userBtn = ref({
      tag: props.localRoutes ? "router-link" : "a",
      props: props.localRoutes
        ? { to: { name: "/" } }
        : {
            href: import.meta.env?.VITE_PARTYOU_PROFILE_URL
              ? import.meta.env.VITE_PARTYOU_PROFILE_URL
              : "",
          },
    });

    const loginBtn = ref({
      tag: Array.isArray(props.loginColor) ? "py-button-gradient" : "py-button",
      props: {
        fullWidth: true,
        fontSize: "text-base",
        height: 52,
        weight: "medium",
        textColor: props.loginTextColor,
      },
    });

    const homeLink = ref({
      tag: props.localRoutes ? "router-link" : "a",
      props: props.localRoutes
        ? { to: { name: "home" } }
        : { href: partyouHome },
    });

    const defaultNavLinks = ref([
      {
        label: t("features"),
        tag: props.localRoutes ? "route-link" : "a",
        props: props.localRoutes
          ? { to: { name: "features" } }
          : { href: `${partyouHome}/features` },
      },
      {
        label: t("aboutPartyou"),
        tag: props.localRoutes ? "route-link" : "a",
        props: props.localRoutes
          ? { to: { name: "about" } }
          : { href: `${partyouHome}/about` },
      },
      {
        label: "Blog",
        tag: "a",
        props: {
          href: import.meta.env?.VITE_BLOG_URL
            ? import.meta.env.VITE_BLOG_URL
            : "",
          target: "_blank",
        },
      },
    ]);

    const navBackground = computed(() => {
      if (isMobile.value) {
        return `bg-${props.sidenavColor ? props.sidenavColor : props.color}`;
      }

      return "bg-transparent";
    });

    const navLinks = computed(() => {
      return [
        ...(Array.isArray(props.navPrepend) ? props.navPrepend : []),
        ...defaultNavLinks.value,
        ...(Array.isArray(props.navAppend) ? props.navAppend : []),
      ];
    });

    if (Array.isArray(props.loginColor)) {
      loginBtn.value.props.colors = props.loginColor;
      loginBtn.value.props.direction = "right";
    } else {
      loginBtn.value.props.color = props.loginColor;

      if (props.loginColor === "white") {
        loginBtn.value.props.overlayColor = props.loginTextColor;
      }
    }

    const onScroll = () => (offset.value = window.scrollY > 36 && props.fixed);
    const onResize = () => (isMobile.value = window.innerWidth < 1280);
    const emitSignIn = () => emit("sign-in");
    const emitSignOut = () => emit("sign-out");

    onScroll();
    onResize();

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    });

    watch(offset, () => emit("offset", offset.value));

    return {
      t,
      emitSignIn,
      emitSignOut,
      userMenu,
      sidenav,
      openSidenav,
      toggleUserMenu,
      closeUserMenu,
      closeSidenav,
      navBackground,
      isMobile,
      homeLink,
      loginBtn,
      userBtn,
      partyouLogo,
      offset,
      navLinks,
      defaultNavLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
