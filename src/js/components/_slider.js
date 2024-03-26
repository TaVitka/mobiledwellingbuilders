import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  speed: 700,
  gap: 100,
  autoHeight: true,
  autoplay: {
    delay: 200,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});