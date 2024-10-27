// Custom Scripts
// Custom scripts

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3, // Количество слайдов, отображаемых одновременно
  spaceBetween: 40, // Пробел между слайдами

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // когда ширина экрана <= 640px
    640: {
      // slidesPerView: 1,
      spaceBetween: 20,
    },
    // когда ширина экрана > 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // когда ширина экрана > 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

