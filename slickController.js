$(".mainSlider").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 5,
  variableWidth: true,
  autoplay: true,
  dots: true,
  arrows: true,
  prevArrow: ".arrow_prev",
  nextArrow: ".arrow_next",
});

$(".secondarySlider").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 12,
  variableWidth: true,
  autoplay: false,
  dots: false,
  arrows: true,
  prevArrow: ".secondary_arrow_prev",
  nextArrow: ".secondary_arrow_next",
});
