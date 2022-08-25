
import  './navBar.scss';
import CartWidget from '../cartWidget/CartWidget'
import{IoMdDisc} from 'react-icons/io'
import { myContext } from '../cartContext/CartContext'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs'





//Componente que muestra la barra de navegación, incluyendo el componente CartWidget (Carrito de Compras)
const NavBar = () => {
  const {hayProductos,cantidadCarrito} = useContext(myContext)
  
  
  return (
    <>
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
   
    <div className="container-fluid">
      <Link className="navbar-brand border border-white rounded-circle border-2" id="logo" to='/'>Vi-Commerce <IoMdDisc/></Link>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
        <ul className="navbar-nav me-0 mb-2 mb-lg-0 me-lg-0 ">
          <li className="nav-item ">
            <a ><Link className="nav-link" aria-current="page" to='/'>Home</Link></a>
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
            <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='face' to='https://www.facebook.com/gejo.leschevich'><BsFacebook/> </Link>  
            <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='insta' to='https://www.instagram.com/gejol86/'><BsInstagram/> </Link>  
            <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='whats' to='/'><BsWhatsapp/> </Link>  
            <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='linked' to='https://www.linkedin.com/in/german-leschevich-b9986927/'><BsLinkedin/> </Link>  
            <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='git' to='https://github.com/gleschevich/Vi-Commerce'><BsGithub/> </Link>  
        
        </form>
    
      </div>
    </div>
  </nav>
    
    </>
  )
}

export default NavBar