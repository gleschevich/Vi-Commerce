
import  './navBar.scss';
import CartWidget from '../cartWidget/CartWidget'
import{FcMusic} from 'react-icons/fc'
import { myContext } from '../cartContext/CartContext'
import {Link} from 'react-router-dom'
import { useContext } from 'react'




//Componente que muestra la barra de navegación, incluyendo el componente CartWidget (Carrito de Compras)
const NavBar = () => {
  const {hayProductos,cantidadCarrito} = useContext(myContext)
  
  
  return (
    <>
    {//Contenedor de TODO el navBar
    }
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    {//Contenedor de los elementos y botones del NavBar
    }
    <div className="container-fluid">
      <a ><Link className="navbar-brand border border-white rounded-circle border-2" id="logo" to='/'> Vi-Commerce <FcMusic/></Link> </a>
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
        <ul className="navbar-nav me-0 mb-2 mb-lg-0 me-lg-0 ">
          <li className="nav-item ">
            <a ><Link className="nav-link" aria-current="page" to='/'>Home</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vinilos</a>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a ><Link className="dropdown-item" to='/categoria/Rock'>Rock</Link></a></li>
                <li><a ><Link className="dropdown-item" to='/categoria/Metal'>Metal</Link></a></li>
                <li><a ><Link className="dropdown-item" to='/categoria/Pop'>Pop</Link></a></li>
              </ul>
           </li>
           <li>
            <a className='nav-link' href='#'>Contacto</a>
           </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
           {hayProductos ? <button className="btn btn-danger ms-3 me-3 mb-3 mb-lg-0" href="#" id='cart'> <CartWidget cantidadCarrito={cantidadCarrito}/></button>:
           <div></div>}
          </li>
        </ul>
        <form className="d-flex ">
          <input className="form-control me-2" type="search" placeholder="Buscar en la página" aria-label="Search"/>
          <button className="btn btn-danger" type="submit">Buscar</button>
        </form>
    
      </div>
    </div>
  </nav>
    
    </>
  )
}

export default NavBar