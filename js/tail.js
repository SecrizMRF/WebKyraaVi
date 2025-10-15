const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById("icon-hamburger");
const iconClose = document.getElementById("icon-close");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("scale-y-100");

  // Toggle animasi panel
  mobileMenu.classList.toggle("scale-y-100");
  mobileMenu.classList.toggle("scale-y-0");

  // Toggle ikon
  iconHamburger.classList.toggle("hidden", isOpen);
  iconClose.classList.toggle("hidden", !isOpen);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

  // hamburger.addEventListener("click", function () {
//     mobileMenu.classList.toggle("hidden");
//   });
// });



// const menuBtn = document.getElementById("menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");
// const closeMenu = document.getElementById("close-menu");

//       menuBtn.addEventListener("click", () => {
//         mobileMenu.classList.remove("-translate-y-full");
//       });

//       closeMenu.addEventListener("click", () => {
//         mobileMenu.classList.add("-translate-y-full");
//       });