import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  // slidesPerView: 4,
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainers__arrow-btn--next',
    prevEl: '.trainers__arrow-btn--prev',
  },
});