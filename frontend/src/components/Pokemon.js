import { PokemonModal } from "./PokemonModal"
import { ImageModal } from "./ImageModal"
import { useState } from "react"

export const Pokemon = ({ pokemon }) => {
    const pokemonTypes = (pokemon.type.length > 1) ? `${pokemon.type[0]} / ${pokemon.type[1]}` : [pokemon.type]
    const [openModal, setOpenModal] = useState(false)
    const [openImgModal, setOpenImgModal] = useState(false)
    const imgId = pokemon.id.toString().padStart(3, 0)
    const pokeId = pokemon.id
    
    return (
        <>
            <div className="pokemon">
                <div id="number">{pokemon.id}</div>
                <div id="name">{pokemon.name.english}</div>
                <div id="image"><img src={require(`../images/pokemon/${imgId}.png`)} onClick={() => { setOpenImgModal(true) }} /></div>
                <div id="type">{pokemonTypes}</div>
                <div id="button"><button onClick={() => { setOpenModal(true) }}>More Info</button></div>
            </div>
            {openModal && <PokemonModal pokeId={pokeId} modalIsOpen={setOpenModal}/> }
            {openImgModal && <ImageModal pokeId={pokeId} modalIsOpen={setOpenImgModal}/> }
        </>
    )

}
