import { createContext, useState } from 'react';
export const myContext = createContext();

export default function CartContext({ children }) {
  
  //Arreglo de productos agregados al carrito
  const [cart, setCart] = useState([])
  //Cantidad de ese producto agregado al carrito
  const [quantity, setQuantity] = useState(0)
  //Producto (Objeto JSON) que se quiere agregar al carrito
  const [itemCart, setItemCart] = useState({})
  //Estado del boton de añadir al carrito (si es verdadero se muestra boton Finalizar Compra)
  const [hideButton, setHideButton] = useState(false)
  
    //Función que añade el producto y la cantidad seleccionada al carrito, si el item ya está agregado modifica su cantidad.
    const addItem=(itemCart,quantity)=>
    {
       let auxItem={}
       //Si el producto está agregado al carrito, se suma la cantidad (quantity )a la ya registrada
       if (isInCart(itemCart,cart))
        {
          for(let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemCart.id)
              cart[i].cantidad+=quantity
            }
            console.log("repetido")
            console.log(cart)
        }
       //Si el producto no está agregado al carrito, se lo agrega
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
            console.log(cart)
        }
    }

    //Función que devuelve TRUE si el producto está agregado en el carrito, FALSE si no lo está
    const isInCart=(itemCart,cart)=>
    {
        if(cart.find( producto => producto.id == itemCart.id)!= undefined)
           return true;
        else
        {
          console.log("retorno falso")
          return false;

        }

    }

    //Función que elimina todos los productos del carrito
    const clearCart=()=>
    {
        for (let i = cart.length; i > 0; i--) {
            cart.pop();
          }
          console.log(cart);

    }

    //Función que elimina un producto específico  del carrito
    const removeItem=(item)=>
    {
      for (let i = cart.length; i > 0; i--) {
        if(cart[i].id == item.id)
        cart.splice(i,1);
      }

    }



  // const [cart, setCart] = useState(true);
  /*
  addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  {
    if no lo tiene
    setCart cart.push item con su cantidad
    sino
    setCart cambia la cantidad
  }
removeItem(itemId) // Remover un item del cart por usando su id
//{filter}
clear() // Remover todos los items
//setcart([])
isInCart:(id) => i | -1
{
    find / findOne
}
*/

  return (
    <>
      <myContext.Provider value={{ cart, setCart, quantity, setQuantity, removeItem,addItem,clearCart,isInCart,itemCart,setItemCart,hideButton, setHideButton }}>{children}</myContext.Provider>
    </>
  );
}