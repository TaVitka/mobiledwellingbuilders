import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

let options = {
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 20,
  autoplay: {
    delay: 200,
  },
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const services1 = new Swiper('.services__slider1', options);
const services2 = new Swiper('.services__slider2', options);
const services3 = new Swiper('.services__slider3', options);

const swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 100,
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