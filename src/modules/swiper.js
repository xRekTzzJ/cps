import { register } from 'swiper/element/bundle';
function initSwiper() {
    if (window.innerWidth < 768) {
        register()
    }
}
initSwiper()