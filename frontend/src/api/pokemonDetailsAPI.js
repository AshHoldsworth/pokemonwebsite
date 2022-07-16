
export const fetchPokemonDetails = async (number) => {
    const results = await fetch (`https://pokeapi.co/api/v2/pokemon/${number}/`)
    const resultsJSON = await results.json()
    return resultsJSON
}
