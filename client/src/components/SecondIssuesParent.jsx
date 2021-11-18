import React, { useEffect, useState } from 'react'
import { SecondIssuesChild } from './SecondIssuesChild'

export const SecondIssuesParent = () => {
    const [allTemps, setAllTemps] = useState([
        { type: "Celsius", value: 0 },
        { type: "Fahrenheit", value: 32 }
    ])

    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    const toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    const setCurrentTemp = (value, index) => {
        setAllTemps(prev => {
            prev[index].value = value
            const otherTemp = prev[index].type === "Celsius" ?
                toFahrenheit(value) :
                toCelsius(value)
            prev[index === 0 ? 1 : 0].value = otherTemp
            return [...prev]
        })

    }

    return (
        <div>
            {allTemps.map((temp, index) => {
                return <SecondIssuesChild type={temp.type} temp={temp.value} setTemp={(value) => setCurrentTemp(value, index)} />
            })}
        </div>
    )
}
