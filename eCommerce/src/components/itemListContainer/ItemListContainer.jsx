
import { FcCallback } from 'react-icons/fc'
import ItemCount from '../itemCount/ItemCount'
import styles from './itemListContainer.scss'

const ItemListContainer = (props) => {
  let totalProductos=0;

  const onAdd = (childData) =>{
      totalProductos+=childData;
      console.log(totalProductos)
  }
  
  return (
    <>
        <section className= 'container-fluid mt-5' id="productos">
          <h3>{props.nombreProducto}</h3>
          <div className='row row-cols-lg-3 row-cols-md-2 row-col-sm-1'>
          <div className='col'>
            <div className='card'>
                <img className='card-img-top border border-danger' src='./img/MaidenCollection.jpeg'/>
              <div className='card-body'>
                <h5 className='card-title text-primary'>Iron Maiden - Iron Maiden</h5>
                <ItemCount stock = "5" inicial="1" callbackPadre={onAdd}/>
              </div>           
          </div>
        </div>
            <div className='col'>
            <div className='card'>
                <img className='card-img-top border border-danger' src='./img/Maiden-Killers.jpeg'/>
                <div className='card-body'>
                <h5 className='card-title text-primary'>Iron Maiden - Iron Maiden</h5>
                <ItemCount stock = "5" inicial="1" callbackPadre={onAdd}/>

                </div>           
            </div>
          </div>
          <div className='col'>
            <div className='card'>
                <img className='card-img-top border border-danger' src='./img/Maiden-Killers.jpeg'/>
                <div className='card-body'>
                <h5 className='card-title text-primary'>Iron Maiden - Iron Maiden</h5>
                <ItemCount stock = "5" inicial="1" callbackPadre={onAdd}/>

                </div>           
            </div>
          </div>
          </div>
        </section>

    </>
  )
}

export default ItemListContainer