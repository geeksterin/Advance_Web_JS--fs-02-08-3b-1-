const SearchBar = document.getElementById("searchBar");
const searchValue = SearchBar.value;
const cardsContainer = document.getElementById("cardsContainer");
const pokemonDetails = [];
const fetchPokemonDetails = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(pokemonUrl).then((response) => {
      return response.json();
    });
    promises.push(promise);
    // promises.push(fetch(pokemonUrl).then((response) => response.json()));
  }
  Promise.all(promises).then((data) => {
    data.map((ele) => {
      console.log();
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((item) => {
          return item.ability.name;
        }),
        // abilities: ele.abilities.map(ele => ele.ability.name),
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
    });
  });
};

const createPokemonCard = (pokemon) => {
  const cardDiv = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const heading = document.createElement("h2");
  const abilitiesDiv = document.createElement("div");
  const abilitesparas = pokemon.abilities.map((ele, idx) => {
    const abilityPara = document.createElement("p");
    abilityPara.innerText = ele;
    return abilityPara;
  });
  const typePara = document.createElement("p");

  span.innerText = pokemon.id;
  img.src = pokemon.frontShinyImg;
  heading.innerText = pokemon.name;
  typePara.innerText = pokemon.types;
  cardDiv.classList.add("cardDiv");
  cardDiv.appendChild(span);
  cardDiv.appendChild(img);
  cardDiv.appendChild(heading);
  abilitesparas.map((ele) => {
    // console.log(ele);
    cardDiv.appendChild(ele);
  });
  cardDiv.appendChild(typePara);
  cardsContainer.appendChild(cardDiv);
};

fetchPokemonDetails();
