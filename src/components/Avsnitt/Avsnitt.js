import React, { useRef, useEffect, useState } from 'react'
import useAvsnitt from '../../tekst'
import './Avsnitt.scss'

const Avsnitt = ({ antall }) => {
    const initialState = 'Tryk for at fæste til udklipstavlen'
    const [tooltip, setTooltip] = useState(initialState)
    const avsnitt = useAvsnitt(antall)
    const ref = useRef(null)

    useEffect(() => {
        setTooltip(initialState)
    }, [antall])

    const copyToClipboard = () => {
        ref.current.select()
        document.execCommand('copy')
        setTooltip('Fæstet til udklipstavlen!')
        window.gtag('event', 'Click', {
            'event_category': 'Text'
        })
    }

    return (
        <div className="avsnitt" onClick={copyToClipboard}>
            <div id="tooltip">
                <div className="tooltip-content">
                    <div className="arrow"/>
                    <span>{tooltip}</span>
                </div>
            </div>
            {avsnitt.map((par, idx) => (
                <p key={idx}>{par}</p>
            ))}
            <textarea
                ref={ref}
                id="tekst"
                onChange={e => e.preventDefault()}
                value={avsnitt.reduce((total, par) => {
                    return total + '\n\n' + par
                })}
            />
        </div>
    )
}
export default Avsnitt
