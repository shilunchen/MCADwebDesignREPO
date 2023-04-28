var slider_img = document.querySelector(".slider_img");
var images = [
  "Kirby-and-the-Forgotten-Land_TOP_Banner-min.jpg",
  "Kirby30th_Banner.png",
  "Kirby30thfest_Banner.jpg",
  "KirbyDreamBuffet_TOP_Banner-1.jpg",
  "KirbyWiiDeluxe_TOP_Banner.png",
  "ufo_TOP_Banner.jpg",
];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "media/" + images[i]);
}

let eggBTN = document.querySelector(".topNav_Navbar_eggBTN");
eggBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(0)";
});

let closeBTN = document.querySelector(".hiddenNav_closeBTN");
closeBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(-1000px)";
});
