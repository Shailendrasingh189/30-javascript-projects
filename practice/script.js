const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("sprite");
const pokemonContainer = document.querySelector(".pokemon");

const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const updateUI = (data) => {
    pokemonContainer.style.display = "block";
  pokemonContainer.classList.add(`type-${data.types[0].type.name}`);

  //Set pokemon profile
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;
  weight.textContent = data.weight;
  height.textContent = data.height;
  sprite.src = data.sprites.front_default;
  sprite.alt = data.name;

  //Set pokemon info and stats
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  spAttack.textContent = data.stats[3].base_stat;
  spDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;

  // types
  types.innerHTML = data.types
    .map((obj) => `<span class= "type ${obj.type.name}">${obj.type.name}</span>`)
    .join("");
    
};

const getPokemon = async () => {
  try{
    const pokemonNameOrId = searchInput.value.toLowerCase();
  const url = `${pokemonApi}/${pokemonNameOrId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  bgAddAndRemove();
  updateUI(data);
} catch(err) {
  resetDisplay();
  alert("Pokemon not found");
  console.log(`pokemon not found ${err}`);
}
};

// getData();
const bgAddAndRemove = () => {
  pokemonContainer.classList.remove(
    'type-fire', 
    'type-water', 
    'type-electric', 
    'type-psychic', 
    'type-dark', 
    'type-grass', 
    'type-ice', 
    'type-fairy'
  );
}

const resetDisplay = () => {
  pokemonContainer.style.display = "none";
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  types.innerHTML = "";
  height.textContent = "";
  weight.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  spAttack.textContent = "";
  spDefense.textContent = "";
  speed.textContent = "";
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getPokemon(searchInput.value);
  searchInput.value = "";
});
searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      getPokemon(searchInput.value);
    }
})
