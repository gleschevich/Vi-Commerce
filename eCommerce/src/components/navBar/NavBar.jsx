
import styles from './navBar.scss'
import CartWidget from '../cartWidget/CartWidget'

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
       {//Boton del submenu
       }
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       {//Collapse contenedor que esconde contenido del search
       }
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {//ul lista que contiene los botones en sus elementos li
        }
        <ul className="navbar-nav ms-5">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link" href="#">Vinilos</a>
          </li>
          <li className="nav-item dropdown ms-3">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Rock</a></li>
                <li><a className="dropdown-item" href="#">Metal</a></li>
                <li><a className="dropdown-item" href="#">Pop</a></li>
              </ul>
           </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" id='cart'> <CartWidget/></a>
          </li>
        <form className="d-flex ">
          <input className="form-control me-2" type="search" placeholder="Buscar en la página" aria-label="Search"/>
          <button className="btn btn-danger" type="submit">Buscar</button>
        </form>
        </ul>
      </div>
    </div>
  </nav>
    
    </div>
  )
}

export default NavBar