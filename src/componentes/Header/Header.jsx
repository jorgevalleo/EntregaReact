
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar.jsx'
import CartWidget from '../CartWidget/CartWidget.jsx'
import styles from './Header.module.css'

function Header(){

    return(  
        <>
            <header className={styles.header}>
                <img className={styles.logo} src={logo} alt="Logo de la pagina" />
                <Navbar/>
                <CartWidget/>
            </header>   
        </>

    )
}

export default Header