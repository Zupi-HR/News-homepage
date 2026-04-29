const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");

menuOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.add("show");
  menuOpenBtn.classList.add("hide");
  menuCloseBtn.classList.add("show");
  overlay.classList.add("show");
});

menuCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuOpenBtn.classList.remove("hide");
  menuCloseBtn.classList.remove("show");
  navList.classList.remove("show");
  overlay.classList.remove("show");
});
