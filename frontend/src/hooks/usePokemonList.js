import { useEffect } from 'react'
import { fetchPokemonList } from '../api/pokemonListAPI'

export const usePokemonList = ({setPokemon}) => {
    useEffect(() => {
        fetchPokemonList().then(pokemon => setPokemon(pokemon))
    }, [])

    return
}
