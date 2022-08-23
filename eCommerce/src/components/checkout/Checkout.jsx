import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { myContext } from '../cartContext/CartContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';



export default function Checkout() {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [idOrder, setIdOrder] = useState('')
  const [compro, setCompro] = useState(false)

 const {cart, precioTotal, clearCart} = useContext(myContext) 
  
 function terminarCompra() {
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

  return (
    <>
    {compro ?  
      <section className= 'container-fluid mt-5' id="productos">
        <h1 className='text-start fs-2 fw-bold text-decoration-underline'>Quieres seguir comprando?</h1>
        <Link className='btn btn-primary' to='/' id='btn-detalle'>Volver al inicio</Link>
      </section>
    :
    <div className='container-fluid p-3'> 
    <h2 className='text-danger'>Ingresa tus datos para finalizar la compra</h2>
    
    <div className="form-group row mb-2">
      <div className='col-sm-10'>
        <input type={'text'} placeholder="nombre" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>  
    <div className="form-group row mb-2">
      <div className='col-sm-10'>
      <input type={'tel'} placeholder="celular" value={tel} onChange={(e) => setTel(e.target.value)} />

    </div>
  </div>  
  <div className="form-group row mb-2">
  <div className='col-sm-10'>
    <input type={'email'} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

  </div>
  <div className="form-group row mb-2">
  <div className='col-sm-10'>
    <button className='btn btn-primary mt-2' onClick={terminarCompra}>Terminar Compra</button>
    <p className='text-primary'>Id de tu compra: {idOrder}</p>  

  </div>
</div>  
    
   
    
  
    
 
  </div>
  </div>
    
}
      </>
    
  );
}


