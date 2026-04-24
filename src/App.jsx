import CardGrid from "./components/CardGrid"
import CustomFooter from "./components/CustomFooter";
import CustomHeader from "./components/CustomHeader"
import { catalogo } from "./data"
import { useState } from "react"

function App() {

  const [items, setItems] = useState(catalogo); // Tu lista original
  const [itemsFiltrados, setItemsFiltrados] = useState(catalogo);

  const handleSearch = (query) => {
    if (query === '') {
      setItemsFiltrados(items);
    } else {
      const filtrado = items.filter(item => 
        item.titulo.toLowerCase().includes(query.toLowerCase()) || item.categoria.toLowerCase().includes(query.toLowerCase())
      );
      setItemsFiltrados(filtrado);
    }
  };

  const handleClean = () => {
    setItemsFiltrados(catalogo);
  }
  

  return (
    <>
      <CustomHeader onSearch={handleSearch} onClean={handleClean} />
      <main>
        <CardGrid catalogo={itemsFiltrados} />
      </main>
      <CustomFooter />
    </>
  )
}

export default App
