const CustomFooter = () => {


    const ahora = new Date();
    const anioActual = ahora.getFullYear();  
       
    return(

        <footer className="footer"> 
        <p>Copyright {anioActual}©. Todos los derechos reservados. Nicolás Ezequiel González. </p>
        </footer>

  )
}

export default CustomFooter