import { useEffect, useState} from "react"
import ItemDetail from '../itemDetail/ItemDetail'
 
const ItemDetailContainer = (props) => {

const [item, setItem] = useState(props.productos)

useEffect(() => {
  
    
    const getItem = new Promise((res,rej) => {
        setTimeout(() => {
          res(props.productos)
        },2000)
      })
      getItem.then((res)=>{
      
        setItem(props.productos[1])
      })
      
    return () => {
        
    };
}, [])
    
  return (
    <>
    <section className= 'container-fluid mt-5' id="productos">
    <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
          <ItemDetail producto={item}/>  
        </section>
    </>
  )
}

export default ItemDetailContainer
