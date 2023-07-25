//Llamar la variable que contiene a los pokemon y crear un variable para la cantidad de pokemones que quiero llamar del JSON
const pokeContainer = document.getElementById('poke_container');
const pokemonsNumber = 900;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemonsNumber; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
    <div class="img-container">
    <img data-poke-img src="${sprites.front_default}" alt="${name}" />
    </div>
    <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
	pokeContainer.appendChild(pokemonEl);
}

fetchPokemons();