import { useState } from 'react'

export const Gallery = () => {
    const [imgId, setImgId] = useState(Math.floor(Math.random() * 808))

    let currentId = imgId.toString().padStart(3, 0)
    let nextId = (imgId + 1).toString().padStart(3, 0)
    let previousId = (imgId - 1).toString().padStart(3, 0)

    const updateImgId = (num) => {
        if (imgId === 1 && num === -1) {
            setImgId(809)
        } else if (imgId === 809 && num === 1) {
            setImgId(1)
        } else {
            setImgId(imgId + num)
        }
        currentId = imgId
    }

    return (
        <>
            <div className="gallery">
                <div className="arrow">
                    <button onClick={() => { updateImgId(-1) }}>Previous</button>
                </div>
                <div className="image-small">
                    <img src={require(`../images/pokemon/${(
                        previousId = (previousId === "000") ? "809" : previousId
                        )}.png`)} />
                </div>
                <div className="image-large">
                    <img src={require(`../images/pokemon/${currentId}.png`)} />
                </div>
                <div className="image-small">
                    <img src={require(`../images/pokemon/${(
                        nextId = (nextId === "810") ? "001" : nextId
                        )}.png`)} />
                </div>
                <div className="arrow">
                    <button onClick={() => { updateImgId(+1) }}>Next</button>
                </div>
            </div>
        </>
    )
}
