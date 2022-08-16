//code for burger menu
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger ,.nav").toggleClass("active");
    $(".logo").toggleClass("logo_active");

    $("body").toggleClass("lock");
  });
});

$(".slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
      },
    },
  ],
});
