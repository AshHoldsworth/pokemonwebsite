import { NavLink } from "react-router-dom"

export const ImageModal = ({ pokeId, modalIsOpen }) => {
    const imgId = pokeId.toString().padStart(3, 0)

    return (
        <>
            <div className="image-modal-background">
                <div className="image-modal">
                    <div id="image"><img src={require(`../images/pokemon/${imgId}.png`)} onClick={() => modalIsOpen(false)} /></div>
                    <div>
                        <NavLink to={"/pokemon"}>
                            <button onClick={() => modalIsOpen(false)}>Close</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
