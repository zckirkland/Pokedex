let pokemonList = [
    {
        name: 'Charizard',
        height: '1.7',
        type: ['fire', 'flying'],
        attack: '84',
    },
    {
        name: 'Fearow',
        height: '1.2',
        type: ['flying', 'normal'],
        attack: '90',
    },
    {
        name: 'Ninetales',
        height: '1.1',
        type: 'fire',
        attack: '76',
    },
    {
        name: 'Tentacruel',
        height: '1.6',
        type: ['water', 'poison'],
        attack: '70',
    },
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (Height :" + pokemonList[i].height + ")");

    if (pokemonList[i].height > 1.5) {
        document.write(" - A big one!");
    }

    document.write("<br></br>");
    
}