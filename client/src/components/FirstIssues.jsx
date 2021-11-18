import React, { useEffect, useState } from 'react'

const initialPuppies = [{ name: "Pluto", age: 12 }, { name: "Cocoa", age: 7 }]

export const FirstIssues = () => {
    const [puppies, setPuppies] = useState([...initialPuppies])
    const [numberOfPuppies, setNumberOfPuppies] = useState(0)
    const [name, setName] = useState("")
    const [secondsSinceRender, setSecondsSinceRender] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSecondsSinceRender(prev => prev + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        setNumberOfPuppies(puppies.length)
    }, [puppies])

    const handleClick = () => {
        puppies.push({ name: name, age: Math.floor(Math.random() * 10) })
        setName("")
    }

    const handleChange = (value, index) => {
        const copy = [...puppies]
        copy[index].name = value
        setPuppies(copy)
    }

    const wasChanged = (index) => {
        return initialPuppies[index]?.name !== puppies[index].name
    }

    return (
        <div>
            <h1 className="title">Puppies: {numberOfPuppies}</h1>
            <h2>seconds since render: {secondsSinceRender}</h2>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button className="add-puppy" onClick={() => handleClick()}>+</button>
            {puppies.map(({ name, age }, index) =>
                <div className="puppy">
                    <hr />
                    <div>🐕</div>
                    <input value={name} onChange={(e) => { handleChange(e.target.value, index) }} />
                    <div>age: {age}</div>
                    <div className="change">changed: {String(wasChanged(index))}</div>
                </div>
            )}
        </div>
    )

}
