import React from 'react'

export const Item = ({id, nombre, descripcion, precio, stock}) => {
    
  return (
    <div>
        <h3>Id: {id}</h3>
        <h3>Nombre: {nombre}</h3>
        <h3>Descripcion: {descripcion}</h3>
        <h3>Precio: {precio}</h3>
        <h3>Stock: {stock}</h3>
        <a href="#">Ver detalles</a>
    </div>
  )
}
