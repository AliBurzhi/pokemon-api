import './css/common.css';
import pokemonCardTpl from '../src/templates/pokemoncard.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container')
};

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markUp = pokemonCardTpl(pokemon);
        console.log(markUp);
        refs.cardContainer.insertAdjacentHTML('beforeend', markUp);
    })
    .catch(error => {
        console.log(error);
    });