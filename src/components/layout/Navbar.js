import { Link } from 'react-router-dom'
import Container from './Container'

import logo from '../../img/logo.png'

import styles from './Navbar.module.css'

export default function Navbar(  ) {

        return (
            <nav className={ styles.navbar }>
                <Container>
                    <Link to="/" > 
                        <img src={logo} alt="ACME" width="30%"/>
                    </Link>

                    <ul className={ styles.list }>
                        <li className={styles.item}> <Link to="/" >Home</Link> </li>
                        <li className={styles.item}> <Link to="/cadastro" >Cadastro</Link> </li>
                        <li className={styles.item}> <Link to="/pacientes" >Todos pacientes</Link> </li>
                    </ul>
                    
                    
                    
                </Container>
            </nav>
        )
}