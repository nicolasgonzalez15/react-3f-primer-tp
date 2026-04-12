import Buscador from "./Buscador"

const CustomHeader = ({ onSearch,onClean }) => {
  return (
    
    <header className="header"> 
                <h1>TP1 - React JS - VITE</h1>
                <h2>Página de consulta de cartas recuperadas</h2>
               <Buscador onSearch={onSearch} onClean={onClean} />
                
    </header>


  )
}

export default CustomHeader