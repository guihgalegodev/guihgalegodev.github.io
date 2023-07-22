import { links } from "./links.js";
export default function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
    const topo = document.getElementById("header");
    topo.classList.toggle("active");
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
  links.forEach((link) => {
    link.addEventListener("click", toggleMenu);
    link.addEventListener("touchstart", toggleMenu);
  });
}
