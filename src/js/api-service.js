function fetchPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    return fetch(url).then(response => response.json());
}

export default { fetchPokemon };