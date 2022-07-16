import { Filter } from "./Filter"
import { Pokemon } from "./Pokemon"
import { usePokemonList } from "../hooks/usePokemonList"
import { useState } from "react"
import { capitalFirstLetter } from "../functions/capitalFirstLetter"

export const PokemonList = () => {

    const [pokemon, setPokemon] = useState([])
    usePokemonList({ setPokemon })
    pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)
    const [type, setType] = useState("all")
    const [region, setRegion] = useState("all")

    return (
        <>
            <Filter type={type} setType={setType} region={region} setRegion={setRegion} />
            <div className="body">
                <div className="pokemon-container">
                    {pokemon.map(p => (
                    (p.type.includes(capitalFirstLetter(type)) || type === "all") ? <Pokemon pokemon={p} key={p.id} /> : null)
                    )}
                </div>
            </div>
        </>
    )
}
