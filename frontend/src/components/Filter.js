import { capitalFirstLetter } from "../functions/capitalFirstLetter"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useCallback } from "react"

const types = [
    "all",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy"
]

export const Filter = ({ type, setType }) => {

    const [search, setSearch] = useState("all")
    const handleSearchBox = (value) => {
        setSearch(value)
    }

    console.log(search)
    const navigate = useNavigate();
    const handleSearchSubmit = useCallback(() => navigate(`../pokemon/${search === "" ? "all" : search}`));

    return (
        <>
            <div className="filter">
                <div className="types">
                    {types.map((t, i) =>
                        <div
                            id="type"
                            key={i}>{capitalFirstLetter(t)}
                            <input
                                type="radio"
                                value={t}
                                name="type"
                                key={i}
                                checked={type === t}
                                onChange={(e) => { setType(e.target.value) }}
                            />
                        </div>
                    )}
                </div>

                <div className="search-box" tabIndex={0}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => { handleSearchBox(e.target.value)}}
                        onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                    />
                    <button onClick={() => {handleSearchSubmit()}}>Go</button>
                </div>
            </div>
        </>
    )
}
