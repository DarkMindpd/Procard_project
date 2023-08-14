var swiper4 = new Swiper(".mySwiper4", {
    grabCursor: true,
    loop: true,
    effect: "creative",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
  });