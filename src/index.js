import './css/common.css';
import pokemonCardTpl from '../src/templates/pokemoncard.hbs';
import API from './js/api-service';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);



function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;

    API.fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(error => console.log(error))
        .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
        const markUp = pokemonCardTpl(pokemon);
        refs.cardContainer.innerHTML = markUp;
}