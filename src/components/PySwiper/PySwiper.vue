<template>
    <div class="swiper-container" :class="[className, styles]">
        <div class="swiper-wrapper">
            <slot />
        </div>
        <div class="swiper-pagination" v-if="pagination"></div>
    </div>
</template>

<script>
import { ref, nextTick, watch, computed, reactive } from 'vue'
import Swiper from 'swiper'
import SwiperCore, { Thumbs, Pagination, Autoplay } from 'swiper/core'
// import 'swiper/swiper.scss'
// require ('swiper/components/pagination/pagination.scss')
// require ('swiper/components/thumbs/thumbs.scss')
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

SwiperCore.use([Thumbs, Pagination, Autoplay])

export default {
    name: 'py-swiper',

    props: {
        thumbs: { type: Object, required: false },
        slidesPerView: { type: Number, default: 1 },
        spaceBetween: { type: Number, default: 16 },
        className: { type: String, default: 'py-swiper' },
        breakpoints: { type: Object, required: false},
        styles: { type: String, required: '' },
        disableTouch: { type: Boolean, default: false },
        pagination: { type: Boolean, default: false },
        autoplay: { type: Boolean, default: false },
        delay: { type: Number, default: 5000 },
        loop: { type: Boolean, default: false }
    },

    setup (props, { emit }) {
        const swiper = ref(null)
        const thumbComputed = computed(() => props.thumbs)
        const options = reactive({
            speed:1000,
            loop: props.loop,
            grabCursor: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            resizeObserver: true,
            slidesPerView: props.slidesPerView,
            spaceBetween: props.spaceBetween,
            thumbs: { swiper: null },
            breakpoints: props.breakpoints || {},
            allowTouchMove: !props.disableTouch,
            pagination: props.pagination && { clickable: true, el: '.swiper-pagination', type: 'bullets' },
            autoplay: props.autoplay && { delay: props.delay },
            on: {
                init: function (instance) {
                    emit('on-init', instance)
                },
            }
        })

        const initSwiper = () => {
            if (swiper.value) {
                swiper.value.destroy()
            }

            swiper.value = swiper.value = new Swiper(`.${props.className}`, options)
        }
        
        watch(thumbComputed, () => {
            options.thumbs = {
                swiper: thumbComputed.value,
            }

            initSwiper()
        })

        nextTick(() => initSwiper())

        return {
            swiper
        }
    }
}
</script>
 