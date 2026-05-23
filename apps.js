// Práctica 1: Arreglo de prueba con Pokémon
const pokemonIniciales = [
    { id: 1, nombre: 'Bulbasaur', tipo: 'planta' },
    { id: 4, nombre: 'Charmander', tipo: 'fuego' },
    { id: 7, nombre: 'Squirtle', tipo: 'agua' }
];

// Práctica 2: Consumo de la PokéAPI
const consultarPokemon = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        crearTarjetaAPI(pokemon);
    } catch (error) {
        console.error('Error al obtener el Pokémon', error);
    }
};

// Función para crear tarjeta desde la API
function crearTarjetaAPI(pokemon) {
    const contenedor = document.getElementById('pokedex-container');
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');

    const nombre = pokemon.name.toUpperCase();
    const imagen = pokemon.sprites.front_default;
    const tipo = pokemon.types[0].type.name;

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <img src="${imagen}" alt="${nombre}">
        <p>Tipo: ${tipo}</p>
    `;

    contenedor.appendChild(tarjeta);
}

// Cargar los primeros 150 Pokémon
window.onload = async () => {
    for (let i = 1; i <= 150; i++) {
        await consultarPokemon(i);
    }
};
