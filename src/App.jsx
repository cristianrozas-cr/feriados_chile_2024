import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import chile from "./assets/pngwing.com(4).png"


function App() {

//Estado en el que declararemos el input que guarde lo que el usuario escriva
  const [search, setSearch] = useState("")

  return (
    <>
    <div className='layout-flex'>
      <div className='aside'>
        <div className='buscador'>
          <div className='titulo-pagina'>
          <img
              alt="imagen"
              src={chile}
              width="100"
              height="100"
              className="d-inline-block m-2 me-4"
              />
            <h2>Feriados 2024</h2>
          </div>
          <div className='input-container'>
            <h4>Busca un feriado</h4>
            <Buscador search={search} setSearch={setSearch}/>
          </div>
        </div>
      </div>
      <div className='main'>
        <MiApi search={search}/>
      </div>
      <footer className='footer'>
        Derechos reservados
      </footer>
    </div>
    </>
  )
}

export default App
