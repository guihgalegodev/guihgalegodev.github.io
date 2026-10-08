import MenuMobile from "./modules/menu-mobile.js";
import ContentFecth from "./modules/content-fetch.js";

const menuMobile = new MenuMobile("btn-mobile", "nav", "header");
menuMobile.init();

const fetchPage = new ContentFecth(window.location.href, ".content");
fetchPage.init();
