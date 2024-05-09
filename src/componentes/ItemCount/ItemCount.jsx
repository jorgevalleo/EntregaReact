import { useState } from "react"

function ItemCount(){

    //let stock = 5
    const [cantidad, setCantidad] = useState(0)

    const suma = () => { setCantidad (cantidad + 1) }
    const resta = () => { if (cantidad > 0) setCantidad (cantidad - 1) }

    return(  

        <>
            <div>ItemCount</div>
            <button onClick={resta}> - </button>
            <span> {cantidad} </span>
            <button onClick={suma}> + </button>
        </>

    )
}

export default ItemCount