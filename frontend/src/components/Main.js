import { Filter } from './Filter'
import { Landing } from './Landing'
import { About } from './About'
import { PokemonList } from './PokemonList'
import { Routes, Route } from 'react-router-dom'


export const Main = () => {

    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/pokemon/*" element={<PokemonList />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

        </>
    )
}
