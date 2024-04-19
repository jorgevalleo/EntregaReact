import styles from './ItemListContainer.module.css'

const ItemListContaner = () => {
    const titulo = "Bienvenido a mi app"
    const bgBlue = false
    return (
        
        <>
            <h1>{titulo ? titulo : "Titulo por defecto"}</h1>
            <div className={bgBlue ? styles.background : styles.backgroundGreen}>
                <p>Este es un parrafo</p>
                <p>Este es otro parrafo</p>
            </div>
        
        </>
  )
}

export default ItemListContaner