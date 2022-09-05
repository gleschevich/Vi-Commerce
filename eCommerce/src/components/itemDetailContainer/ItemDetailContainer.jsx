import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

//Componente que busca en el arreglo de productos y muestra el detalle del producto seleccionado por el usuario
const ItemDetailContainer = (props) => {

const [isLoadingIDC, setLoadingIDC] = useState(false)
const [item, setItem] = useState({})
const {idProducto} = useParams()

useEffect(() => {
  
    setLoadingIDC(true)
    const db = getFirestore();
    const refADoc = doc(db, 'productos', idProducto);

    getDoc(refADoc).then((res) => {
      const objetoBienFormado = { id: res.id, ...res.data() };
      setItem(objetoBienFormado);
      setLoadingIDC(false)
    });
  
      
    
}, [idProducto])
    
  return (
    <>
    <section className= 'container-fluid mt-5' id="productos">
    <h3 className='text-start fs-2 fw-bold text-decoration-underline' id='title__container'>{props.titulo}</h3>
        {isLoadingIDC ? <button class="btn btn-primary text-center" type="button" disabled>  
                            <span class="spinner-border spinner-border-md mb-2" role="status" aria-hidden="true"></span>
                               Cargando ...
                        </button>  
        : <ItemDetail producto={item}/>}  
        </section>
    </>
  )
}

export default ItemDetailContainer
