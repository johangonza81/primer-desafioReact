import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"
import MyCard from "./Componentes/MyCard"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  

  return (
    <>
     <Header tittle="ADOPTA UN PERRITO"/>
     <div className="cardContainer">
     <MyCard 
        image = "https://placedog.net/800/640?id=19"
        title = "Thor"
        text="Excelente compañia este tiene 5 meses apenas "
        colorButton = "danger"
        textButton = "Schnocker"
        />
        <MyCard
        image="https://placedog.net/800/640?id=14"
        title="Zeus"
        text="Es Super Inteligente y tierno no imaginas cuanto  "
        colorButton="success"
        textButton="Welsh"
        />
        <MyCard
        image="https://placedog.net/800/640?id=5"
        title="Odin"
        text="Es la mejor mascota que podria llegar a tener sin duda"
        colorButton="warning"
        textButton="Husky"
        />
        <MyCard
        image="https://placedog.net/800/640?id=22"
        title="Tich"
        text="Excelente guardian, pero tambien es juegueton"
        colorButton="primary"
        textButton="Braco"
        />
     </div>
     <Footer PieDePagina="Encuentranos en Santiago de Chile en Calle Agustinas 1355 Piso2 Ofc 245"/>
     <Footer PieDePagina="Telefono +56912345678 / Correo: adoptaunperrito@gmail.com"/>
    </>
  )
}

export default App
