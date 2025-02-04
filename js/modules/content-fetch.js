import { links } from "./links.js"; //Importando os links que estão separados em outro documento

export default function initContentFecth() {
  function handleClick(e) {
    e.preventDefault();

    fetchPage(e.target.href);
    window.history.pushState(null, null, e.target.href);
  }

  async function fetchPage(url) {
    // document.querySelector(".content").innerHTML = "Carregando";
    window.scrollTo({
      top: 0,
    });
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
    linkAtivo(url);
    initAnimaScroll();
  }

  function replaceContent(newText) {
    const newHtml = document.createElement("div");
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector(".content");
    const newContent = newHtml.querySelector(".content");
    if (window.location.href.includes("curriculo")) {
      const sobreCurriculo = newHtml.querySelector(".content .sobre");
      sobreCurriculo.style.display = "grid";
    }

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector("title").innerText;
  }

  window.addEventListener("popstate", () => {
    fetchPage(window.location.href);
  });

  if (
    window.location.href.includes("curriculo") ||
    window.location.href.includes("projetos")
  ) {
    fetchPage(window.location.href);
  }

  function initAnimaScroll() {
    const sections = document.querySelectorAll(
      ".content [data-section='content-info']"
    );

    if (sections.length) {
      const windowMetade = window.innerHeight * 0.7;

      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowMetade < 0;
          const direcao = section.dataset.anima;
          if (isSectionVisible) {
            section.classList.add("ativo", direcao);
          }
        });
      }
      animaScroll();

      window.addEventListener("scroll", animaScroll);
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", handleClick);
    link.addEventListener("touchstart", handleClick);
  });
}

function linkAtivo(urlAtual) {
  links.forEach((link) => {
    link.classList.remove("ativo");
    const href = link.getAttribute("href");
    if (urlAtual.includes(href)) {
      link.classList.add("ativo");
    }
  });
}
