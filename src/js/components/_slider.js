import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

let options = {
  slidesPerView: 1,
  speed: 700,
  gap: 20,
  autoHeight: true,
  autoplay: {
    delay: 200,
  },
  // centeredSlides: true,
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  }
}

const services1 = new Swiper('.services__slider1', options);
// const gallery2 = new Swiper('.gallery__slider2', options);
// const gallery3 = new Swiper('.gallery__slider3', options);
// const gallery4 = new Swiper('.gallery__slider4', options);

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