import React, { useRef, useEffect, useState } from 'react'
import useAvsnitt from '../../tekst'
import './Avsnitt.scss'

const Avsnitt = ({ antall }) => {
    const initialState = 'Tryk for at fæste til udklipstavlen'
    const [tooltip, setTooltip] = useState(initialState)
    const avsnitt = useAvsnitt(antall)
    const ref = useRef(null)

    useEffect(() => {
        const field = ref.current
        field.style.height = 'auto'
        field.setAttribute('style', 'height:' + field.scrollHeight + 'px;')
        field.style.height = field.scrollHeight + 'px;'
        setTooltip(initialState)
    }, [antall])

    const copyToClipboard = () => {
        ref.current.select()
        document.execCommand('copy')
        setTooltip('Fæstet til udklipstavlen!')
    }

    return (
        <div className="avsnitt">
            <div id="tooltip">
                <div className="tooltip-content">
                    <span>{tooltip}</span>
                    <div className="arrow"/>
                </div>
            </div>
            <textarea
                ref={ref}
                id="tekst"
                spellCheck={false}
                onClick={copyToClipboard}
                onChange={e => e.preventDefault()}
                value={avsnitt.reduce((total, par) => {
                    return total + '\n\n' + par
                })}
            />
        </div>
    )
}
export default Avsnitt
