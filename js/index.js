const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const topo = document.getElementById("header");
  topo.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const links = document.querySelectorAll("#header-menu a");

function linkAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.toggle("ativo");
  }
}

links.forEach(linkAtivo);
