import { capitalFirstLetter } from "../functions/capitalFirstLetter"
import { useState } from "react"
import { usePokemonDetails } from "../hooks/usePokemonDetails"
import { ModalSprites } from "./ModalSprites"

export const PokemonModal = ({pokeId, modalIsOpen }) => {
    const [detail, setDetail] = useState([])
    const [isBusy, setIsBusy] = useState(true)
    const imgId = pokeId.toString().padStart(3, 0)
    usePokemonDetails({ pokeId, setDetail, setIsBusy })

    return (
        <>
                <div className="modal-background">
                    <div className="modal">
                        {!isBusy ? <>
                        <div id="header">
                            {detail.id
                                .toString()
                                .padStart(3, 0)
                                + ": " +
                                capitalFirstLetter(detail.species.name)}
                        </div>
                        <div id="body">
                            <div id="image">
                                <img src={require(`../images/pokemon/${imgId}.png`)} />
                                <div id="sprites">
                                    <ModalSprites detail={detail} />
                                </div>
                            </div>
                            <div id="description">
                                <p>Type: {detail.types.length > 1 ?
                                    (capitalFirstLetter(detail.types[0].type.name) + " / " + capitalFirstLetter(detail.types[1].type.name))
                                        : capitalFirstLetter(detail.types[0].type.name)}</p>
                                <p>Height: {(detail.height * 10)+"cm"}</p>
                                <p>Weight: {(detail.weight * 0.1).toFixed(1) + "kg"}</p>
                            </div>
                            <div id="stats">
                                <p>Stats</p>
                                {detail.stats.map(stat => 
                                    <p>{capitalFirstLetter(stat.stat.name) + ": " + stat.base_stat}</p>
                                )}
                            </div>
                        </div>
                        <div id="footer">
                            <button onClick={() => modalIsOpen(false)}>CLOSE</button>
                        </div>
                        </> : null }
                    </div>
                </div>
        </>
    )
}