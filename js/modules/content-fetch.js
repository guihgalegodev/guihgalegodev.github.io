import { links } from "./links.js"; //Importando os links que estão separados em outro documento
import AnimaScroll from "./anima-scroll.js";
export default class ContentFecth {
  constructor(url, content) {
    this.url = url;
    this.content = document.querySelector(content);
    this.links = links;

    this.handleClick = this.handleClick.bind(this);
    this.handlePopstate = this.handlePopstate.bind(this);
  }

  checkUrl(currentUrl) {
    if (currentUrl.endsWith(".io/") && !currentUrl.includes(".html")) {
      currentUrl += "index.html";
    }
    this.fetchPage(currentUrl);
  }

  handleClick(e) {
    e.preventDefault();

    this.fetchPage(e.target.href);
    this.checkUrl(e.target.href);
    window.history.pushState(null, null, e.target.href);
  }

  async fetchPage(url) {
    // document.querySelector(".content").innerHTML = "Carregando";
    window.scrollTo({
      top: 0,
    });

    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    this.replaceContent(pageText);
    this.linkAtivo(url);

    const animaScroll = new AnimaScroll(
      ".content [data-section='content-info']",
    );
    animaScroll.init();
  }

  replaceContent(newText) {
    const newHtml = document.createElement("div");
    newHtml.innerHTML = newText;

    const newContent = newHtml.querySelector(".content");
    if (window.location.href.includes("curriculo")) {
      const sobreCurriculo = newHtml.querySelector(".content .sobre");
      sobreCurriculo.style.display = "grid";
    }

    this.content.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector("title").innerText;
  }

  handlePopstate() {
    this.checkUrl(window.location.href);
  }

  addEvents() {
    this.links.forEach((link) => {
      link.addEventListener("click", this.handleClick);
      link.addEventListener("touchstart", this.handleClick);
    });

    window.addEventListener("popstate", this.handlePopstate);
  }

  linkAtivo(urlAtual) {
    links.forEach((link) => {
      link.classList.remove("ativo");
      const href = link.getAttribute("href");
      if (urlAtual.includes(href)) {
        link.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.url) {
      this.checkUrl(this.url);
      this.addEvents();
    }
    return this;
  }
}
