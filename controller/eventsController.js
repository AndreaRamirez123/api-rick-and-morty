
async function obtenerPersonajes() {
    console.log('obtenerPersonajes()');
    const resultado = await consumirApiFetch('https://rickandmortyapi.com/api/character');
    mostrarPersonajes(resultado);
}

async function obtenerEpisodios() {
    console.log('obtenerEpisodios()');
    const resultado = await consumirApiFetch('https://rickandmortyapi.com/api/episode');
    mostrarEpisodios(resultado);
}