import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function clearContent() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function init() {
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const contactButton = document.querySelector('.contact');

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
    });
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });
    contactButton.addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}


init();
loadHome();

