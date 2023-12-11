export function displayMenu() {
    const cards = document.querySelector("#content");
    cards.classList.add("menu-cards-container")

    let cardOneDescription = document.createElement("h1");
    cardOneDescription.textContent = "CARBONACCI"

    let cardTwoDescription = document.createElement("h1");
    cardTwoDescription.textContent = "LASAGNA"

    let cardThreeDescription = document.createElement("h1");
    cardThreeDescription.textContent = "SPAGETTI"

    const cardOne = document.createElement("div");
    cardOne.classList.add("menu-card");

    const cardTwo = document.createElement("div");
    cardTwo.classList.add("menu-card");

    const cardThree = document.createElement("div");
    cardThree.classList.add("menu-card");

    cardOne.appendChild(cardOneDescription);
    cardTwo.appendChild(cardTwoDescription);
    cardThree.appendChild(cardThreeDescription);


    cards.appendChild(cardOne);
    cards.appendChild(cardTwo);
    cards.appendChild(cardThree);
  
    return cards; 
}
