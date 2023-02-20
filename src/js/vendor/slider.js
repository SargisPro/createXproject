const mainGap = document.querySelector('.services-list')
const compStyles = window.getComputedStyle(mainGap);
const gap = parseInt(compStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items');


const portfolioSlider = new Swiper(portSlider, {
  spaceBetween: gap,
  slidesPerView: 3,
  loop: true,

  on: {
    init: function() {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
      console.log(activeSlide);
      console.log(nextActiveSlide);
      console.log(nextNextActiveSlide);

    },
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
});

document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-next');


  document.querySelectorAll('.portfolio-section__items').forEach(el => {
    el.classList.remove('slider-visible');
  });

  if (activeSlide.previousElementSibling) {
    const nextActiveSlide = activeSlide.previousElementSibling;
    activeSlide.classList.add('slider-visible');
    activeSlide.nextElementSibling.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
  };
});

document.querySelector('.portfolio-section__next ').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-next');
  const nextActiveSlide = activeSlide.nextElementSibling;
  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items').forEach(el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
});