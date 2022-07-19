import styles from './itemListContainer.scss'


const ItemListContainer = (props) => {
  return (
    <div className="container-lg" id="productos">
        <h1>{props.nombreProducto}</h1>
    </div>
  )
}

export default ItemListContainer