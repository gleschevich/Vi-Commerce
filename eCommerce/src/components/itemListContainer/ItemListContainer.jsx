
import ItemList from '../itemList/ItemList';
import './itemListContainer.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';


//Componente que recupera todo el arreglo de productos y los pasa a ITEM LIST para que los mapee e ITEM los muestre
const ItemListContainer = (props) => {

//Arreglo que contiene todos los productos  
const [productos, setProductos] = useState([])
//Activa o desactiva la vista de Loading.. mientras se cargan los productos.
const[isLoadingILC,setisLoadingILC] = useState(false)

//Parametro que se utiliza para mostrar la categoría segun lo seleccionado por el usuario
const {idCategoria} = useParams()


  useEffect(() => {
    setisLoadingILC(true)
    const db = getFirestore();

    let refCollectionProductos;
    if (!idCategoria) {
      refCollectionProductos = collection(db, 'productos');
    } else {
      refCollectionProductos = query(collection(db, 'productos'), where('idCategoria', '==', idCategoria));
    }

    getDocs(refCollectionProductos).then((res) => {
      let limpios = res.docs.map((producto) => {
        const productoBienFormado = { id: producto.id, ...producto.data() };
        setisLoadingILC(false)
        return productoBienFormado;
      });

      setProductos(limpios);
    });
  }, [idCategoria]);


  return (
    <>
    <header className="bg-grey py-5">
      <div className="container px-4 px-lg-5 ">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder text-danger" id='title'>VI-COMMERCE</h1>
            <p className="lead fw-normal text-white-50">Tienda de vinilos musicales</p>
        </div>
      </div>
    </header>
        <section className= 'container-fluid' id="productos">
          <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
          {isLoadingILC ? <button className="btn btn-primary text-center" type="button" disabled>  
                            <span className="spinner-border spinner-border-md mb-2" role="status" aria-hidden="true"></span>
                               Cargando ...
                        </button>  
                        :<ItemList productos={productos}/>}  
        </section>
        

    </>
  )
}

export default ItemListContainer