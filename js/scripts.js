let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    { name: 'Butterfree', height: 11, types: ['bug', 'flying'] },
    { name: 'Pikachu', height: 4, types: ['electric'] },
    { name: 'Charmeleon', height: 11, types: ['fire'] },
    { name: 'Charizard', height: 17, types: ['fire', 'flying'] }
];
// Display each Pokémon's name and height on the webpage
for (let i = 0; i < pokemonList.length; i++) {
    // Check if the Pokémon's height is greater than 15
    if (pokemonList[i].height > 15) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' - Wow, that\'s big!' + '</p>');
    } else
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '</p>');

}
