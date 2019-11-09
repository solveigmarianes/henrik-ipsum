import React, { useState } from 'react'
import Avsnitt from './components/Avsnitt/Avsnitt'
import { tekst } from './tekst'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
    const [antall, setAntall] = useState(2)
    const decrease = () => setAntall(antall - 1)
    const increase = () => setAntall(antall + 1)

    return (
        <>
            <Header/>
            <main>
                <div className="teller">
                    <h3>Vælg dit ønskede antall afsnit:</h3>
                    <button onClick={decrease} disabled={antall === 1}>
                        <div>‹</div>
                    </button>
                    <div className="antall">{antall}</div>
                    <button onClick={increase} disabled={antall === tekst.length}>
                        <div>›</div>
                    </button>
                </div>
                <Avsnitt antall={antall}/>
            </main>
            <Footer/>
        </>
    )
}

export default App
