$(".mainSlider").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  arrows: true,
  prevArrow: ".arrow_prev",
  nextArrow: ".arrow_next",
});

$(".secondarySlider").slick({
  infinite: true,
  centerMode: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: false,
  autoplay: false,
  dots: false,
  arrows: true,
  prevArrow: ".secondary_arrow_prev",
  nextArrow: ".secondary_arrow_next",
});
