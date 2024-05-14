import styles from './ItemListContainer.module.css'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ItemList } from '../ItemList/ItemList'

const ItemListContaner = ( {titulo, bgBlue} ) => {
    //const titulo = "Bienvenido a mi app"
    //const bgBlue = false
const url = "https://fakestoreapi.com/products";
const method = "GET";

   const { data } = useFetch(url, method, null);
    
    return (
        
        <>
            <h1>{ titulo ? titulo : "Titulo por defecto" }</h1>
            <div className={bgBlue ? styles.background : styles.backgroundGreen}>
                <h2>Esto es una descripcion</h2>
            </div>
        
        
            <div className='card'>
                {data?.map((elemento) => (
                    <>
                        <div className='card-body'>
                            <h3 key={elemento.id}>{elemento.title}</h3>
                            <h4>{elemento.category}</h4>
                            <img src={elemento.image} alt={elemento.title} />
                            <h4>{elemento.price}</h4>
                            <button className='btn btn-primary'>Ver Detalles</button>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default ItemListContaner