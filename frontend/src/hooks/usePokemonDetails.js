import { useEffect } from 'react'
import { fetchPokemonDetails } from '../api/pokemonDetailsAPI'

export const usePokemonDetails = ({pokeId, setDetail, setIsBusy}) => {
    useEffect(() => {
        fetchPokemonDetails(pokeId).then(result => {
            if (result) {
                setIsBusy(false)
                setDetail(result)
            }
        })
    }, [])

    return
}
