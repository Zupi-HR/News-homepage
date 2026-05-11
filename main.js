const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const navigation = document.querySelector(".primary-navigation");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const focusableElements = navigation.querySelectorAll(
  `button:not(.menu-open-btn), .nav-link`,
);
const firstFocusableElement = focusableElements[0];
const lastFocusableElement = focusableElements[focusableElements.length - 1];

menuOpenBtn.addEventListener("click", openMenu);

menuCloseBtn.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (navList.classList.contains("show") && e.key === "Escape") closeMenu();
  if (navList.classList.contains("show") && e.key === "Tab") {
    if (focusableElements.length === 0) return;

    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  }
});

overlay.addEventListener("click", closeMenu);

function openMenu() {
  navList.classList.add("show");
  menuOpenBtn.classList.add("hide");
  menuCloseBtn.classList.add("show");
  overlay.classList.add("show");
  menuCloseBtn.focus();
}

function closeMenu() {
  menuOpenBtn.classList.remove("hide");
  menuCloseBtn.classList.remove("show");
  navList.classList.remove("show");
  overlay.classList.remove("show");
  menuOpenBtn.focus();
}
