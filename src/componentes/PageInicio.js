import React, { Component } from 'react'
import '../hojas-de-estilo/PageInicio.css'

import axios from "axios";//
import "bootstrap/dist/css/bootstrap.min.css";//


const urlEventos = 'http://localhost:9000/api/eventos/5'

class PageInicio extends Component{

    state={
        data: []
    }


    peticionGet = () => {
        axios.get(urlEventos)
        .then(response => {
          //console.log(response.data);
          this.setState({
            data:response.data
          })
          //console.log(this.state.data);
        }).catch(error => {
          console.log(error.message);
        })
      }

      componentDidMount(){
        this.peticionGet()
      }


    render(){
        return <div className='divPrincipalInicio'>
            <table className="table ">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Equipo1</th>
            <th>Marcador Equipo1</th>
            <th>Equipo2</th>
            <th>Marcador Equipo2</th>
            <th>Deporte</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(evento => {
            return(
              <tr key={evento.sec}>
                <td>{evento.fecha}</td>
                <td>{evento.equi1}</td>
                <td><h5>{evento.marca1}</h5></td>
                <td>{evento.equi2}</td>
                <td><h5>{evento.marca2}</h5></td>
                <td>{evento.deporte}</td>
                <td>{evento.descrip}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
        </div>
    }
}

export default PageInicio