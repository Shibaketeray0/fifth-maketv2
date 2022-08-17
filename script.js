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
//4 times because if just ".price_button" hover on ".cardd" 4 cards will at once change their style when we hover on 1 button
$(".price_button1").hover(function () {
  $(".card_n1").toggleClass("hovered");
});
$(".price_button2").hover(function () {
  $(".card_n2").toggleClass("hovered");
});
$(".price_button3").hover(function () {
  $(".card_n3").toggleClass("hovered");
});
$(".price_button4").hover(function () {
  $(".card_n4").toggleClass("hovered");
});
