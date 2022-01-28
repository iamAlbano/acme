import { useState } from 'react'
import styles from './Select.module.css'

export default function Select( { label, name, handleOnChange, value, options } ) {

    const [defaultVal, setDefaultVal] = useState(0)

    

    return (
        <div className={ styles.formSelect }>
            <label htmlFor={ name }> { label }</label>
            <select name={ name } 
                    id={ name } 
                    onChange={ handleOnChange } 
                    value={value}
                    required>

                <option value="" key="0" >Selecione uma opção</option>

                { options.map( (option) => (
                    <option value={ option } key={ option }  >{ option }</option>
                )) }
            </select>
        </div>
    )
}