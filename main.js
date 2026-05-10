const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");

menuOpenBtn.addEventListener("click", openMenu);

menuCloseBtn.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (navList.classList.contains("show") && e.key === "Escape") closeMenu();
});

overlay.addEventListener("click", closeMenu);

function openMenu() {
  navList.classList.add("show");
  menuOpenBtn.classList.add("hide");
  menuCloseBtn.classList.add("show");
  overlay.classList.add("show");
  menuOpenBtn.setAttribute("aria-expanded", "true");
  menuCloseBtn.focus();
}

function closeMenu() {
  menuOpenBtn.classList.remove("hide");
  menuCloseBtn.classList.remove("show");
  navList.classList.remove("show");
  overlay.classList.remove("show");
  menuOpenBtn.setAttribute("aria-expanded", "false");
  menuOpenBtn.focus();
}
