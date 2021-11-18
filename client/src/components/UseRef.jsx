import React, { useEffect, useState } from 'react'

export const UseRef = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev += 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const resetTimer = () => {

    }

    const changeColor = () => {
        // this function should change the color of the wrapper div 
        const wrapper = document.getElementById("wrapper")
        wrapper.style.backgroundColor = "red"
    }

    return (
        <div id="wrapper">
            <div>
                timer: {timer}
                <button onClick={resetTimer} >reset timer</button>
            </div>
            <button onClick={changeColor}>change color</button>
        </div>
    )
}
