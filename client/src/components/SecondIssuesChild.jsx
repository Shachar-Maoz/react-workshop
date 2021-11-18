import React, { useState } from 'react'
import { useEffect } from 'react'

export const SecondIssuesChild = ({ type, temp, setTemp }) => {
    const [temperature, setTemperature] = useState(temp)

    useEffect(() => {
        setTemperature(temp)
        console.log('temp: ', type, temp);
    }, [temp])

    useEffect(() => {
        setTemp(temperature)
        console.log('temperature: ', type, temperature);
    }, [temperature])

    const changeTemp = ({ target }) => {
        setTemperature(target.value)
    }

    return (
        <div>
            {`${type}: `}
            <input type="number" value={temperature} onChange={changeTemp} />
        </div>
    )
}
