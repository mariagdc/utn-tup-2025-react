import { createContext, useContext, useEffect, useState } from "react"
const ObjectsContext = createContext(null);

export const ObjectsProvider = ({children}) => {
    const [objects, setObjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/objects')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al traer productos ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            setObjects(data)
        })
        .catch(error =>  {
            console.log(`error al obtener objects ${error} `)
            setError(true)
        })
    },[]);    
    return (
        <ObjectsContext.Provider value={objects}>
            {children}
        </ObjectsContext.Provider>
    )
}

export const useObjects = () => {
    return useContext(ObjectsContext);
}