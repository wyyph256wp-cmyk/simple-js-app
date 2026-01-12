let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    { name: 'Butterfree', height: 11, types: ['bug', 'flying'] },
    { name: 'Pikachu', height: 4, types: ['electric'] },
    { name: 'Charmeleon', height: 11, types: ['fire'] },
    { name: 'Charizard', height: 17, types: ['fire', 'flying'] }
];
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '</p>');
}