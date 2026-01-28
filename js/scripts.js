let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
        { name: 'Butterfree', height: 11, types: ['bug', 'flying'] },
        { name: 'Pikachu', height: 4, types: ['electric'] },
        { name: 'Charmeleon', height: 11, types: ['fire'] },
        { name: 'Charizard', height: 17, types: ['fire', 'flying'] }
    ];
    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        if (typeof pokemon === 'object' &&
            Object.keys(pokemon).length === 3 &&
            Object.keys(pokemon).includes('name') &&
            Object.keys(pokemon).includes('height') &&
            Object.keys(pokemon).includes('types')
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('Only objects with name, height, and types can be added!');
        }
    }
    return {
        getAll: getAll,
        add: add
    };
})();

// Display each Pokémon's name and height on the webpage using for loop
// for (let i = 0; i < pokemonRepository.getAll().length; i++) {
//     // Check if the Pokémon's height is greater than 15
//     if (pokemonRepository.getAll()[i].height > 15) {
//         document.write('<p>' + pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ')' + ' - Wow, that\'s big!' + '</p>');
//     } else
//         document.write('<p>' + pokemonRepository.getAll()[i].name + ' (height: ' + pokemonRepository.getAll()[i].height + ')' + '</p>');
// }

// Display each Pokémon's name and height on the webpage using forEach
pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // Check if the Pokémon's height is greater than 15
    // if (pokemon.height > 15) {
    //     document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + ' - Wow, that\'s big!' + '</p>');
    // } else {
    //     document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>');
    // }
}); 
