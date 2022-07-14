import React from 'react'
import styles from './navBar.scss'

const NavBar = () => {
  return (
    <div>
    {//Contenedor de TODO el navBar
    }
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    {//Contenedor de los elementos y botones del NavBar
    }
    <div className="container-fluid">
      <a className="navbar-brand" id="logo" href="#">Vi-Commerce</a>
       {//Boton del search
       }
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       {//Collapse contenedor que esconde contenido del search
       }
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {//ul lista que contiene los botones en sus elementos li
        }
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vinilos</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              Categorias
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Rock</a></li>
              <li><a className="dropdown-item" href="#">Metal</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Ofertas</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Buscar en la página" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
    
    </div>
  )
}

export default NavBar