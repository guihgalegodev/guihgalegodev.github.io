export default function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");
  const links = document.querySelectorAll("#header-menu a");
  const sectionsCurriculo = document.querySelectorAll("[data-anima='right']");
  
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
    const topo = document.getElementById("header");
    topo.classList.toggle("active");
  }
  
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
  
  function linkAtivo(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
      link.classList.toggle("ativo");
    }
  }
  links.forEach(linkAtivo);
}