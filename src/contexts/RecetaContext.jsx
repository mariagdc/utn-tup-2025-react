import { createContext, useContext, useEffect, useState } from 'react';

import recetasData from '../data/recetas.json';

const RecetasContext = createContext(null);

export const RecetasProvider = ({children}) =>{

    const [ recetas, setRecetas ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        try {
            setRecetas(recetasData);
            setIsLoading(false);            
        } catch (err) {
            console.log("Error al cargar recetas: ", err);
            setError('Error al cargar los datos de las recetas.');
            setIsLoading(false);
        }
    },[]);

    const getRecetaById = (id) =>{
        return recetas.find(receta => receta.id === parseInt(id));
    };

    return (
        <RecetasContext.Provider value={{recetas, isLoading, error, getRecetaById}}>
            {children}
        </RecetasContext.Provider>
    );
}

export const useRecetas = () =>{
    const context = useContext(RecetasContext);
    if(!context){
        throw new Error('useRecetas debe estar dentro de un RecetasProvider');
    }
    return context;
}