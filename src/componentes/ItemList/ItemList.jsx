import React from 'react'
import { Item } from '../Item/Item' 

export const ItemList = (ListaProductos) => {
    console.log(ListaProductos)
    return (
    <div>
        {ListaProductos.map((id, nombre, descripcion, precio, stock) => {
            return <Item key={id} id={id} nombre={nombre} descripcion={descripcion} precio={precio} stock={stock}/>
        })}
    </div>
  )
}
