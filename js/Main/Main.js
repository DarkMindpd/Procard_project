var mySwiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function btn1() {
  mySwiper1.slideTo(0, false, false);

}
function btn2() {
  mySwiper1.slideTo(1, false, false);

}
function btn3() {
  mySwiper1.slideTo(2, false, false);

}
function btn4() {
  mySwiper1.slideTo(3, false, false);

}
function btn5() {
  mySwiper1.slideTo(4, false, false);

}
function btn6() {
  mySwiper1.slideTo(5, false, false);

}


