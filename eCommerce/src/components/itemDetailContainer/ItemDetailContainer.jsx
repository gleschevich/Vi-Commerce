import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = (props) => {

const [item, setItem] = useState([])
const {idProducto} = useParams()
console.log(idProducto)
let auxProductos=[
  {
    id:1,
    artista:"Iron Maiden",
    album: "Iron Maiden",
    precio:2500,
    imagenURL:"./img/MaidenCollection.jpeg",
    tipo:"Vinilo",
    año:1980,
    idCategoria:"Metal"
  },
  {
    id:2,
    artista:"Iron Maiden",
    album: "Killers",
    precio:2500,
    imagenURL:"./img/Maiden-Killers.jpeg",
    tipo:"Vinilo",
    año:1981,
    idCategoria:"Metal"
  },
  {
    id:3,
    artista:"Iron Maiden",
    album: "Fear of the dark",
    precio:2500,
    imagenURL:"./img/Maiden-Fear.jpeg",
    tipo:"Vinilo",
    año:1992,
    idCategoria:"Metal"
  },
    {
      id:4,
      artista:"Michael Jackson",
      album: "Past, Present & Future I",
      precio:3450,
      imagenURL:"./img/Jackson-PPFI.jpeg",
      tipo:"vinilo",
      año:1995,
      idCategoria:"Pop"
    }
  ]

useEffect(() => {
  
    
    const getItem = new Promise((res,rej) => {
        setTimeout(() => 
            res(auxProductos.filter((producto)=>producto.id == idProducto))
          
        ,2000)
      })
      getItem.then((res)=>{
      
        setItem(res)
      })
      
    
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
