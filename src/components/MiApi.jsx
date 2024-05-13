import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MiApi({search}){

    const [feriadosApi, setFeriadosApi] = useState([])

    //Url del que  llamamos nuestra api
    const url = "https://api.boostr.cl/feriados"
    //Funcion fetch para llamar a la API
    const getData = async () => {
      const data = await fetch(url)
      const res = await data.json()
      const feriados = res.data
      console.log(feriados)
      setFeriadosApi(feriados)
      }
      //Hook use effect que utilizamos para llamar a la funcion fetch y que se cargue solo una vez iniciado el componente
      useEffect(() => {
        getData()
      }, [])

      //Variable que guarda los datos filtrados
      let feriadosFiltrados = []

      //If que permite filtrar los elementos
      if (search === ""){
        feriadosFiltrados = feriadosApi
      } else {
        feriadosFiltrados = feriadosApi.filter((feriado) => feriado.title.toLowerCase().includes(search.toLowerCase()))
      }
  return(

    <>
    {/* <div>{
      feriadosFiltrados.map((feriado, id) =>
      <p key={id}>{feriado.date} - {feriado.title} - {feriado.type}</p>)
      }
    </div> */}

    <Table striped bordered hover>
    <thead>
        <tr>
          <th>Fecha</th>
          <th>Título</th>
          <th>Tipo</th>
          <th>Detalle</th>
        </tr>
      </thead>
      {feriadosFiltrados.map((feriado, id) =>
            <tbody>
            <tr>
              <td>{feriado.date}</td>
              <td>{feriado.title}</td>
              <td>{feriado.type}</td>
              <td>{feriado.extra}</td>
            </tr>
          </tbody>

      )}
    </Table>






    </>
  )
}

export default MiApi