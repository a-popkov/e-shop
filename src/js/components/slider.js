import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const heroSlider = document.querySelector('.hero__slider');
const popProdSlider = document.querySelector('.popular-product__slider');
const viewSlider = document.querySelector('.view__slider');
const watchSlider = document.querySelector('.watch__slider');
const testimonialsSlider = document.querySelector('.testimonials-video__slider');

let heroSwiper = new Swiper(heroSlider, {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
});

let popProdSwiper = new Swiper(popProdSlider, {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    567: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.popular-product__next',
    prevEl: '.popular-product__prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
    pagination: {
    el: '.popular-product__pagination',
    clickable: true,
  },
});

let viewSwiper = new Swiper(viewSlider, {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    567: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.view__pagination',
    clickable: true,
  },
});

let watchSwiper = new Swiper(watchSlider, {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    567: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.watch__next',
    prevEl: '.watch__prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
    pagination: {
    el: '.watch__pagination',
    clickable: true,
  },
});

let testimonialsSwiper = new Swiper(testimonialsSlider, {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    567: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.testimonials-video__pagination',
    clickable: true,
  },
});
