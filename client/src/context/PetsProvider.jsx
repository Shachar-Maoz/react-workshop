import { createContext, useState } from "react"

const Puppies = createContext(null)
const Kittens = createContext(null)


export const PetsProvider = ({ children }) => {
    const [puppies, setPuppies] = useState([])
    const [kittens, setKittens] = useState([])

    const addPuppy = (details) => {
        setPuppies(prev => [...prev, details])
    }

    const addKitten = (details) => {
        setKittens(prev => [...prev, details])
    }

    return (
        <Puppies.Provider value={{ puppies, addPuppy }}>
            <Kittens.Provider value={{ kittens, addKitten }}>
                {children}
            </Kittens.Provider>
        </Puppies.Provider>
    );

}