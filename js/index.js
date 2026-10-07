import MenuMobile from "./modules/menu-mobile.js";
import initContentFecth from "./modules/content-fetch.js";

const menuMobile = new MenuMobile("btn-mobile", "nav", "header");
menuMobile.init();

initContentFecth();
