import { Landing } from './Landing'
import { About } from './About'
import { PokemonList } from './PokemonList'
import { Gallery } from './Gallery'
import { Routes, Route } from 'react-router-dom'


export const Main = () => {

    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/pokemon/:searchQuery" element={<PokemonList />} />
                    <Route path="/gallery/*" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

        </>
    )
}
