import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './noMatch.css'


const NoMatch = () => {
    return (
        <div className="d-flex flex-column fluid" id="notfound">
          <figure>
          <img src={require("./../../assets/Photos/racoon.png")} alt="not found" id="racoon"/>
          </figure>
          
          <h1>404 Página no encontrada :( </h1>  
          <div>
            <Link to="/">
          <Button variant="outline-danger">Regresar a la página principal</Button>
            </Link>
          </div>
        </div>
    )
}

export default NoMatch;
