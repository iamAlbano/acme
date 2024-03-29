import styles from './Footer.module.css'

import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer( props ) {

        return (
            <footer className={ styles.footer }>
                <ul className={ styles.social }>
                    <li>
                        <FaFacebook />
                    </li>

                    <li>
                        <FaInstagram />
                    </li>

                    <li>
                        <FaLinkedin />
                    </li>
                </ul>

                <p className={ styles.copyright }>
                    <span>ACME</span> &copy; 2022
                </p>

                
            </footer>
        )
}