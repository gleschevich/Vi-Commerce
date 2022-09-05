import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { myContext } from '../cartContext/CartContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import './checkout.scss'


export default function Checkout() {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [idOrder, setIdOrder] = useState('')
  const [compro, setCompro] = useState(false)
  const [mensaje, setMensaje] = useState('')

 const {cart, precioTotal, clearCart} = useContext(myContext) 
  
 function terminarCompra() {
    let validado = true;
    let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    
    
    if(name.length == 0)
    {
      setMensaje("Ingrese su nombre")
      validado= false
    }else
    {
        if (tel.length == 0)
        {
          setMensaje("Ingrese su telefono")
          validado = false
        }
      else
      {
        if(!re.exec(email))
        {
        setMensaje("Ingrese direccion de email valida " );
        validado = false
        }
      }
    } 
        
      
    

  if (validado)
  {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fechaCompra = `${day}-${month}-${year}`;
 
    const order = {
      user: { name, tel, email },
      items: {cart},
      date: {fechaCompra},
      total: {precioTotal}
    };

    const db = getFirestore();
    const refCollection = collection(db, 'orders');

    addDoc(refCollection, order).then((res) => {
      
        setIdOrder(res.id);
        Swal.fire({
          imageUrl: './img/vinilos-notas.webp',
          text: `Gracias por tu compra! Tú numero de orden es: ${res.id}`,
          imageHeight: 300,
        })
        clearCart()
        setCompro(true)
    })
  }
}

  return (
    
      <>
      {compro ?  
        <section className= 'container-fluid mt-5' id="productos">
          <h2 className='text-start fs-2 fw-bold text-decoration-underline' id='title__container'>Quieres seguir comprando?</h2>
          <Link className='btn btn-primary' to='/' id='btn-detalle'>Volver al inicio</Link>
        </section>
      :
      <div className='container-fluid mt-5'> 
      <div className="form-group row mb-2 justify-content-center">
        <h2 className='text-danger' id='title__form'>Ingresa tus datos para finalizar la compra</h2>
      </div>
      <div className="form-group row mb-2 justify-content-center">
        <div className='col-sm-10'>
          <input className='form-control' type={'text'} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>  
      <div className="form-group row mb-2 justify-content-center">
        <div className='col-sm-10'>
        <input  className='form-control' type={'tel'} placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />
  
      </div>
    </div>  
    <div className="form-group row mb-2 justify-content-center">
    <div className='col-sm-10'>
      <input className='form-control' type={'email'} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
    </div>
    <div className="form-group row mb-2 justify-content-center">
    <div className='col-sm-10'>
      <button className='btn btn-primary mt-2' id='btn-detalle' onClick={terminarCompra}>Terminar Compra</button>
      <p className='text-danger'>{mensaje}</p>  
    </div>
    </div>  
    </div>
    </div>
      
  }
        </>
      
    );
  }
