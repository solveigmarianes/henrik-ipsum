import React, { useRef, useEffect, useState } from 'react'
import useAvsnitt from '../../tekst'
import './Avsnitt.scss'

const Avsnitt = ({ antall }) => {
    const [tooltip, setTooltip] = useState('Klik for at kopiere')
    const avsnitt = useAvsnitt(antall)
    const ref = useRef(null)

    useEffect(() => {
        const field = ref.current
        field.style.height = 'auto'
        field.setAttribute('style', 'height:' + field.scrollHeight + 'px;')
        field.style.height = field.scrollHeight + 'px;'
    }, [antall])

    const copyToClipboard = () => {
        ref.current.select()
        document.execCommand('copy')
        setTooltip('Fæstet til udklipstavlen!')
    }

    if (antall < 1) return null
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
