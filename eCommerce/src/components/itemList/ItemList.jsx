import Item from "../item/Item"


//Componente que mapea todos los productos del arreglo y los pasa a ITEM para que los muestre
const ItemList = ({productos}) => {
    
    
  return (
    <>
    <div className='row row-cols-lg-3 row-cols-md-2 row-col-sm-1'>
      {
        productos.map((productos)=>(
        <div className='col'>
          <Item key={productos.id} productos={productos}/>
        </div>
        ))
      }
     
    </div>

    </>
  )
}

export default ItemList