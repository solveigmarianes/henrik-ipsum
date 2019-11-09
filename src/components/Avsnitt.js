import React, { useRef, useEffect } from 'react'
import useAvsnitt from '../tekst'

const Avsnitt = ({ antall }) => {
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
    }

    if (antall < 1) return null
    return (
        <div className="avsnitt">
            <div className="tooltip">Tooltip</div>
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
