export function displayHome() {
    const mainFragment = document.createDocumentFragment();
    const main = document.querySelector("#content");
    main.id = "content";
    if(!main.classList.contains("home")){
        main.classList.add("home");

    }

    const firstHeading = document.createElement("h1");
    firstHeading.textContent = "Explore the culinary imagination of our chefs with our ever-changing specials. These dishes are crafted with passion and creativity."
    main.appendChild(firstHeading);

    const foodCardsContainer = document.createElement("div");
    foodCardsContainer.classList.add("food-cards-container");
    const cards = document.createDocumentFragment();

    for (let i = 0; i <= 2; i++) {
        const card = document.createElement("div");
        card.classList.add("food-card");
        cards.appendChild(card);
    }
    foodCardsContainer.appendChild(cards);



    const secondHeading = document.createElement("h2");
    secondHeading.textContent = "A Symphony of Flavors in the Heart of Downtown";

    const mapsFrame = document.createElement("iframe");
    mapsFrame.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973535855964!2d-46.65906922381131!3d-23.56135447879994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1702215506384!5m2!1spt-BR!2sbr");

    mainFragment.appendChild(foodCardsContainer);
    mainFragment.appendChild(secondHeading);
    mainFragment.appendChild(mapsFrame);

    main.appendChild(mainFragment);
    console.log(main);
    return main;
}