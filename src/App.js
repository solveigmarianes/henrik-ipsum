import React, { useState } from 'react'
import Avsnitt from './components/Avsnitt'
import { tekst } from './tekst'

function App() {
    const [antall, setAntall] = useState(4)
    const decrease = () => setAntall(antall - 1)
    const increase = () => setAntall(antall + 1)

    return (
        <>
            <header>
                <div className="header-content">
                    <h1>Henrik Ipsum</h1>
                    <p className="tagline">- en mer herskabelig Lorem Ipsum-generator</p>
                </div>
            </header>
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
            <footer>
                Copyright (c) 2019 | plommesaft
            </footer>
        </>
    )
}

export default App
