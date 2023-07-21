export default function initContentFecth() {
  const links = document.querySelectorAll("#header-menu a");

  function handleClick(e) {
    e.preventDefault();

    fetchPage(e.target.href);
    window.history.pushState(null, null, e.target.href);
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
    initAnimaScroll();
  }

  function replaceContent(newText) {
    const newHtml = document.createElement("div");
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector(".content");
    const newContent = newHtml.querySelector(".content");

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector("title").innerText;
  }

  window.addEventListener("popstate", () => {
    fetchPage(window.location.href);
  });

  function initAnimaScroll() {
    const sections = document.querySelectorAll(
      ".content [data-section='content-info']"
    );

    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;

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

// function linkAtivo(link) {
//   const url = location.href;
//   const href = link.href;
//   if (url.includes(href)) {
//     link.classList.toggle("ativo");
//   }
// }
// links.forEach(linkAtivo);
