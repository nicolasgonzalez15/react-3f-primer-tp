import ItemGrid from "./ItemGrid"

const CardGrid = ({catalogo}) => {
  return (
            <div id="cards-container">
              {catalogo.map(item => (
                <ItemGrid
                  id={item.id}
                  titulo={item.titulo}
                  categoria={item.categoria}
                  anio={item.anio}
                  destacado={item.destacado}
                  />
            ))}
        </div>
  )
}

export default CardGrid