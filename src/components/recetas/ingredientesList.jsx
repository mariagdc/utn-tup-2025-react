// IngredientesList.jsx
const IngredientesList = ({ ingredientes }) => {
  // Verificaciones de seguridad
  if (!ingredientes) {
    return <div>Cargando ingredientes...</div>;
  }

  if (!Array.isArray(ingredientes)) {
    return <div>Error: Formato de ingredientes incorrecto</div>;
  }

  if (ingredientes.length === 0) {
    return <div>No se especificaron ingredientes para esta receta</div>;
  }

  return (
    <div>
      <h3>Ingredientes:</h3>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.cantidad} {ingrediente.unidad} de {ingrediente.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientesList;