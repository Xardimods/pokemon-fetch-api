document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pokemonName").value = "";
})

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    // Time to fetch data!
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("The fetch action is not okay!");
            }
        return response.json();
    })
    .then((data) => {

        const pokemonSprite = data.sprites.front_default;
        const pokemonName = data.name;
        const pokemonImage = document.getElementById("pokemonSprite");
        const mypokemonName = document.getElementById("mypokemonName");

        mypokemonName.innerText = `${pokemonName}`;
        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block";

    })
    .catch((error) => console.error(`There's an error: ${error}`));
});
