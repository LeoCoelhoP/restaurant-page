import "./style.css"
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayReservation } from "./reservation";


function clearPage() {
    let content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    body.insertBefore(content, footer);
    content.classList.remove(content.classList.value);
}

// HEADER CREATION
const body = document.querySelector("body");

const content = document.querySelector("#content");
const contentFragment = document.createDocumentFragment();

const header = document.createElement("header");
header.classList.add("header");

const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "Eco Cabin"
header.appendChild(logo);


const navBar = document.createElement("ul");
navBar.classList.add("nav");
const NavItemsFragment = document.createDocumentFragment();
const navHome = document.createElement("li")
const navMenu = document.createElement("li");
const navReservation = document.createElement("li");

navHome.textContent = "Home";
navHome.addEventListener("click", () => {
    clearPage();
    const home = displayHome()
    body.insertBefore(home, footer);
});



navMenu.textContent = "Menu";
navMenu.addEventListener("click", () => {
    clearPage();
    const menu = displayMenu();
    body.insertBefore(menu, footer)
});

navReservation.textContent = "Reservation";
navReservation.addEventListener("click", () => {
    clearPage()
    const Reservation = displayReservation();
});
NavItemsFragment.appendChild(navHome);
NavItemsFragment.appendChild(navMenu);
NavItemsFragment.appendChild(navReservation);

navBar.appendChild(NavItemsFragment);
header.appendChild(navBar);

// MAIN CREATION


// footer

const footer = document.createElement("footer");
const openTimes = document.createElement("p");
openTimes.textContent = "Open Monday to Sunday - 6:00Pm to 2:00Am || Phone: +(55) 011 99837-0312";

footer.appendChild(openTimes);


body.insertBefore(header, displayHome());
body.appendChild(footer)

content.appendChild(contentFragment);