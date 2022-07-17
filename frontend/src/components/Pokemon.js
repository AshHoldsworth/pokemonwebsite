import { PokemonModal } from "./PokemonModal"
import { ImageModal } from "./ImageModal"
import { useState } from "react"
import { Routes, Route, NavLink } from "react-router-dom"

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
                <div id="image">
                    <NavLink to={"./" + pokeId + "/image"}>
                        <img src={require(`../images/pokemon/${imgId}.png`)} onClick={() => { setOpenImgModal(true) }} />
                    </NavLink>
                </div>
                <div id="type">{pokemonTypes}</div>
                <div id="button">
                    <NavLink to={"./" + pokeId}>
                        <button onClick={() => { setOpenModal(true) }}>More Info</button>
                    </NavLink>
                </div>
            </div>
            <Routes>
                {openModal && <Route path={"/" + pokeId} element={<PokemonModal pokeId={pokeId} modalIsOpen={setOpenModal} />} />}
                {openImgModal && <Route path={"/" + pokeId + "/image"} element={<ImageModal pokeId={pokeId} modalIsOpen={setOpenImgModal} />} />}
            </Routes>
        </>
    )

}
