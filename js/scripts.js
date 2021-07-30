let pokemonRepository = (function() {
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
        }
    ];

    function getAll() {
        return pokemonList;
      }
    
      function add(pokemon) {
        if (typeof pokemon === 'object' && Object.keys(pokemon).includes('name') && Object.keys(pokemon).includes('height') && Object.keys(pokemon).includes('type') && Object.keys(pokemon).includes('attack')) {
          pokemonList.push(pokemon);
        }
      }
    
      function addListItem(pokemon) {
        let list = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button')
        button.innerText = pokemon.name;
        button.classList.add('pokemon-name');
        listItem.appendChild(button);
        list.appendChild(listItem);

        button.addEventListener('click', function (event) {
          showDetails(pokemon);
        });
      }

      function showDetails(pokemon) {
        console.log(pokemon.name);
      }
    
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
      };
}) ();
    
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
}); 