import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'


//Componente que busca en el arreglo de productos y muestra el detalle del producto seleccionado por el usuario
const ItemDetailContainer = (props) => {

const [isLoadingIDC, setLoadingIDC] = useState(false)
const [item, setItem] = useState({})
const {idProducto} = useParams()
let auxProductos=[
  {
    id:1,
    artista:"Iron Maiden",
    album: "Iron Maiden",
    precio:2500,
    imagenURL:"../img/MaidenCollection.jpeg",
    tipo:"Vinilo",
    año:1980,
    idCategoria:"Metal"
  },
  {
    id:2,
    artista:"Iron Maiden",
    album: "Killers",
    precio:2500,
    imagenURL:"../img/Maiden-Killers.jpeg",
    tipo:"Vinilo",
    año:1981,
    idCategoria:"Metal"
  },
  {
    id:3,
    artista:"Iron Maiden",
    album: "Fear of the dark",
    precio:2500,
    imagenURL:"../img/Maiden-Fear.jpeg",
    tipo:"Vinilo",
    año:1992,
    idCategoria:"Metal"
  },
    {
      id:4,
      artista:"Michael Jackson",
      album: "Past, Present & Future I",
      precio:3450,
      imagenURL:"../img/Jackson-PPFI.jpeg",
      tipo:"vinilo",
      año:1995,
      idCategoria:"Pop"
    },
    {
      id:5,
      artista:"Queen",
      album: "A Night at the Opera",
      precio:3700,
      imagenURL:"../img/Queen-ANATO.jpeg",
      tipo:"vinilo",
      año:1975,
      idCategoria:"Rock"
    }
  ]
useEffect(() => {
  
    
    const getItem = new Promise((res,rej) => {
        setLoadingIDC(true)
        setTimeout(() => 
             
            res(auxProductos.find( producto => producto.id == idProducto ))

        ,2000)
      })
      getItem.then((res)=>{
      
        setItem(res)
        setLoadingIDC(false)
      })
      
    
}, [idProducto])
    
  return (
    <>
    <section className= 'container-fluid mt-5' id="productos">
    <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
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
