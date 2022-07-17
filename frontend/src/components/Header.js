import { NavLink } from 'react-router-dom'

export const Header = () => {


    return (
        <>
            <div className="header">
                <div id="title">
                    <img src={require(`../images/global/logo.png`)} />
                </div>
                <div id="nav-bar">
                    <div><NavLink className="link" to="/" activeclassname="active">Home</NavLink></div>
                    <div><NavLink className="link" to="/pokemon" activeclassname="active">Pokemon</NavLink></div>
                    <div><NavLink className="link" to="/gallery" activeclassname="active">Gallery</NavLink></div>
                    <div><NavLink className="link" to="/about" activeclassname="active">About</NavLink></div>
                </div>
            </div>
        </>
    )
}
