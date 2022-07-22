import styles from './itemListContainer.scss'


const ItemListContainer = (props) => {
  return (
    <>
        <section className= 'container-fluid' id="productos">
          <h3>{props.nombreProducto}</h3>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='card -py-2 px-2'>
                  <img className='card-img-top border border-danger' src='./img/MaidenCollection.jpeg'/>
                  <div className='card-body'>
                  <h5 className='card-title text-primary'>Vinilo Iron Maiden - Iron Maiden</h5>
                  <p className='card-text text-primary'>Primer Disco de la banda Iron Maiden  </p>
                  <a className='btn btn-primary' href='#'> Añadir al carrito </a>
                  </div>           
              </div>
            </div>
            <div className='col-lg-6'>
            <div className='card -py-2 px-2'>
                <img className='card-img-top border border-danger' src='./img/Maiden-Killers.jpeg'/>
                <div className='card-body'>
                <h5 className='card-title text-primary'>Vinilo Iron Maiden - Killers</h5>
                <p className='card-text text-primary'>Killers de la banda Iron Maiden</p>
                <a className='btn btn-primary' href='#'> Añadir al carrito </a>
                </div>           
            </div>
          </div>
          </div>
        </section>

    </>
  )
}

export default ItemListContainer