import { useEffect, useState } from "react";
import ListaIngredientes from "../components/receta/Lista";
import { RecetaProvider } from "../contexts/RecetaContext";

function RecetaPage() {
    const [productos, setProductos] = useState([]);
    const [hasError, setError] = useState(false);

    return (
        <RecetaProvider>
            <h1>Receta</h1>
            {hasError && <p>error!!!!</p>}

            <ListaIngredientes titulo={"ingredientes"} productos={productos}/>
        </RecetaProvider>
    )
}

export default RecetaPage;
