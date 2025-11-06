// receta.jsx
// receta.jsx
import { useParams } from 'react-router-dom';
import { useRecetas } from '../contexts/RecetaContext';
import IngredientesList from '../components/recetas/ingredientesList';

const RecetaPage = () => {
  const { getRecetaById } = useRecetas();
  const { id } = useParams();
  
  const receta = getRecetaById(id);

  if (!receta) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div>
      <h1>{receta.titulo}</h1>
      <img src={receta.imagen} alt={receta.titulo} style={{width: '300px'}} />
      <p>{receta.descripcion}</p>
      
      <div>
        <p><strong>Tiempo de preparación:</strong> {receta.tiempoPreparacion}</p>
        <p><strong>Dificultad:</strong> {receta.dificultad}</p>
        <p><strong>Porciones:</strong> {receta.porciones}</p>
      </div>

      <IngredientesList ingredientes={receta.ingredientes} />

      <div>
        <h3>Preparación:</h3>
        <ol>
          {receta.pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecetaPage;