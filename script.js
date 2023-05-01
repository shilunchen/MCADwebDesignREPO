let eggBTN = document.querySelector(".topNav_Navbar_eggBTN");
eggBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(0)";
});

let closeBTN = document.querySelector(".hiddenNav_closeBTN");
closeBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(-1000px)";
});

// $(function () {
//   $(".mainSlider").slick({
//     prevArrow: ".arrow_prev",
//   });
// });

// $(function () {
//   $(".mainSlider").slick({
//     nextArrow: ".arrow_next",
//   });
// });

// $(".carousel-content").slick({
//   prevArrow:
//     "<img class='arrowPrev sliderBTN control-c prev slick-prev' src='media/worksSlideArrow.png'>",
//   nextArrow:
//     "<img class='arrowNext sliderBTN control-c next slick-next' src='media/worksSlideArrow.png'>",
// });

// prevArrow: <button type="button" class="sliderBTN slick-prev">previous</button>,
//     nextArrow: <button type="button" class="sliderBTN slick-next">next</button>,
