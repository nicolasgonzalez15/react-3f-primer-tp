
import { useState } from 'react';

const ItemGrid = ({id, titulo, categoria, anio, destacado}) => {

const [esDestacado, setEsDestacado] = useState(destacado);

  const toggleDestacado = () => {
    setEsDestacado(!esDestacado); // Cambia true por false y viceversa
  };
  
  return (
    <div className={`card ${esDestacado ? "destacado" : ""}`}>
      <h3>{titulo}</h3>
      <p>Categoria: {categoria}</p>
      <p>Año: {anio}</p>
      {esDestacado && <span>⭐ Destacado</span>}
      <button onClick={toggleDestacado}>
        {esDestacado ? "Quitar de favoritos" : "Marcar como favorito"}
      </button>
    </div>
  )
}

export default ItemGrid