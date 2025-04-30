import "./style.css";
import HeaderTemplate from "./templates/header.html?raw";
import Footer from "./templates/footer.html?raw";
import Main from "./templates/main.html?raw";
import { displayCharacters } from "./modules/characters";

const root = document.querySelector<HTMLDivElement>("#app")!;

const header = document.createElement("div");
header.innerHTML = HeaderTemplate;

const footer = document.createElement("div");
footer.innerHTML = Footer;

const main = document.createElement("div");
main.innerHTML = Main;

root.appendChild(header);
root.appendChild(main);
root.appendChild(footer);

const charactersContent = document.createElement("div");
charactersContent.classList.add("character-content");

main.appendChild(charactersContent);

const prevButton = document.createElement("button");
prevButton.innerText = "Load Previous Page";
prevButton.addEventListener("click", async () => {
  console.log("Loading previous page...");
  await displayCharacters(charactersContent, "prev");
});

main.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.innerText = "Load Next Page";

nextButton.addEventListener("click", async () => {
  console.log("Loading next page...");
  await displayCharacters(charactersContent, "next");
});

main.appendChild(nextButton);
