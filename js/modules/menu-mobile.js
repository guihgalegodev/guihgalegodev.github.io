import { links } from "./links.js";
export default class MenuMobile {
  constructor(btnMobile, nav, topo) {
    this.btnMobile = document.getElementById(btnMobile);
    this.nav = document.querySelector(nav);
    this.topo = document.getElementById(topo);

    this.events = ["touchstart", "click"];

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    this.nav.classList.toggle("active");
    this.topo.classList.toggle("active");
  }

  addEvents() {
    this.events.forEach((event) => {
      this.btnMobile.addEventListener(event, this.toggleMenu);
    });
    links.forEach((link) => {
      this.events.forEach((event) => {
        link.addEventListener(event, this.toggleMenu);
      });
    });
  }

  init() {
    if (this.btnMobile) {
      this.addEvents();
    }
  }
}
