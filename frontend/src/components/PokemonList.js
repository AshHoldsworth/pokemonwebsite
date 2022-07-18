import { Filter } from "./Filter"
import { Pokemon } from "./Pokemon"
import { usePokemonList } from "../hooks/usePokemonList"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import { capitalFirstLetter } from "../functions/capitalFirstLetter"

export const PokemonList = () => {
    const { searchQuery } = useParams()
    const [pokemon, setPokemon] = useState([])
    usePokemonList({ setPokemon })
    pokemon.sort((a, b) => (a.id > b.id) ? 1 : -1)
    const [type, setType] = useState("all")

    return (
        <>
            <Filter type={type} setType={setType}/>
            <div className="body">
                <div className="pokemon-container">
                    {pokemon.map(p => (
                    (p.type.includes(capitalFirstLetter(type)) || type === "all") ? (
                        (p.name.english.toLowerCase() === searchQuery.toLowerCase() ||
                        p.type.find(type => type.toLowerCase() === searchQuery.toLowerCase()) ||
                        searchQuery === "all") ?
                    <Pokemon pokemon={p} key={p.id} /> : null
                    ): null)
                    )}
                </div>
            </div>
        </>
    )
}
