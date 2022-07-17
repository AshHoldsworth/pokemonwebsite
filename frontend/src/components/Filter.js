import { capitalFirstLetter } from "../functions/capitalFirstLetter"

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

export const Filter = ({type, setType, region, setRegion}) => {

    return (
        <>
            <div className="filter">
                <div id="title">Type:</div>
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
                            onChange={(e) => {setType(e.target.value)}}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
