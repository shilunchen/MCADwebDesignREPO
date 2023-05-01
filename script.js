let eggBTN = document.querySelector(".topNav_Navbar_eggBTN");
eggBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(0)";
});

let closeBTN = document.querySelector(".hiddenNav_closeBTN");
closeBTN.addEventListener("click", (e) => {
  document.querySelector(".hidden").style.transform = "translateY(-1000px)";
});
