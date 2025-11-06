import { useRecetas } from "../../contexts/RecetaContext";

function ListaIngredientes(props) {

    const receta = useRecetas()
    const listRecetas = receta.map(p => 
        <li key={p.id}>{p.nombre}</li>
    );
    return (
        <>
            {!props.titulo && <p>Sin titulo</p>}
            {props.titulo && <p>{props.titulo}</p>}
            <ul>{listRecetas}</ul>
        </>
    )
}

export default ListaIngredientes;