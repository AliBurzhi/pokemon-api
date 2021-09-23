import './css/common.css';
import pokemonCardTpl from '../src/templates/pokemoncard.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form')
};

refs.searchForm.addEventListener('submit', onSearch);



function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;

    fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(error => console.log(error))
        .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
        const markUp = pokemonCardTpl(pokemon);
        refs.cardContainer.innerHTML = markUp;
}