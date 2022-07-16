
export const fetchPokemonList = async () => {
    const results = await fetch ("http://localhost:8080/collection/pokemonList")
    const resultsJSON = await results.json()
    return resultsJSON
}
