import { createContext, useState,useEffect } from 'react';
export const myContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [itemCart, setItemCart] = useState({})
  const [hideButton, setHideButton] = useState(false)
  

    const addItem=(itemCart,quantity)=>
    {
       

        let auxItem={}
        let auxCart=[]
        let modificado
        if (isInCart(itemCart,cart))
        {
          for(let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemCart.id)
              cart[i].cantidad+=quantity
            }
            
          
            console.log("repetido")
            console.log(cart)

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
            console.log(cart)

        }
    }

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

    const clearCart=()=>
    {
        for (let i = cart.length; i > 0; i--) {
            cart.pop();
          }
          console.log(cart);

    }

    const removeItem=(item)=>
    {


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