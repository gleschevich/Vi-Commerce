import { createContext, useState } from 'react';
export const myContext = createContext();

export default function CartContext({ children }) {
  
  //Arreglo de productos agregados al carrito
  const [cart, setCart] = useState([])
  //Producto (Objeto JSON) que se quiere agregar al carrito
  const [itemCart, setItemCart] = useState({})
  //Estado del boton de añadir al carrito (si es verdadero se muestra boton Finalizar Compra)
  const [hideButton, setHideButton] = useState(false)
  //Estado que chequea si hay productos en el carrito para mostrar el widget
  const [hayProductos, sethayProductos] = useState(false)
  //Cantidad total de productos en el carrito para mostrar en el widget
  const [cantidadCarrito, setcantidadCarrito] = useState(0)

  const [precioTotal, setprecioTotal] = useState(0)


  
    //Función que añade el producto y la cantidad seleccionada al carrito, si el item ya está agregado modifica su cantidad.
    const addItem=(itemCart,quantity)=>
    {
       let auxItem={}
       if (isInCart(itemCart,cart))
        {
          for(let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemCart.id)
              cart[i].cantidad+=quantity
            }
        }
        else
        {
            auxItem=
            {
                id:itemCart.id,
                artista:itemCart.artista,
                album: itemCart.album,
                precio:itemCart.precio,
                cantidad:quantity
            }
            cart.push(auxItem)
        }
        let cantAux=0
        cart.forEach(producto => {
          cantAux += producto.cantidad
          });
        setcantidadCarrito(cantAux)

        
    }

    //Función que devuelve TRUE si el producto está agregado en el carrito, FALSE si no lo está
    const isInCart=(itemCart,cart)=>
    {
        if(cart.find( producto => producto.id == itemCart.id)!= undefined)
           return true;
        else
        {
          return false;

        }

    }

    //Función que elimina todos los productos del carrito
    const clearCart=()=>
    {
      for(let i = 0; i < cart.length; i++) {
            cart.pop();
        }
        sethayProductos(false)
        setprecioTotal(0)
        setcantidadCarrito(0)
       
    

    }

    //Función que elimina un producto específico  del carrito
    const removeItem=(item)=>
    {
      for(let i = 0; i < cart.length; i++) {
        if(cart[i].id == item.id)
          {
            setcantidadCarrito(cantidadCarrito - cart[i].cantidad)
            cart.splice(i,1)
          }
      }
      if (cart.length==0)
      {
        setcantidadCarrito(0)
        sethayProductos(false)
        setprecioTotal(0)
      }
    }




  return (
    <>
      <myContext.Provider value={{ cart, setCart, removeItem,addItem,clearCart,isInCart,itemCart,setItemCart,hideButton, setHideButton, hayProductos, sethayProductos,cantidadCarrito, setcantidadCarrito,precioTotal, setprecioTotal }}>{children}</myContext.Provider>
    </>
  );
}