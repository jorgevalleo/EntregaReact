import carrito from '../../assets/carrito.png'
import styles from './CartWidget.module.css'

function CartWidget(){

    return(

        <>
            <div>
                <span><img className={styles.compra} src={carrito} alt="carrito de compra" /></span>
                <span>5</span>
            </div>
        </>

    )
}

export default CartWidget