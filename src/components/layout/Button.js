import styles from './Button.module.css'

import { Link } from 'react-router-dom'

export default function Button( { to, text } ) {
    return (
        <Link to={ to } className={ styles.btn }>
            { text }
        </Link>
    )
}