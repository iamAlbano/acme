import styles from './Input.module.css'

export default function Input( { type, label, placeholder, name, handleOnChange, value } ) {

    return (
        <div className={ styles.formInput }>
            <label htmlFor={ name }> { label }</label>
            <input 
                type={ type } 
                name={ name } 
                placeholder={ placeholder } 
                id={name}
                onChange={ handleOnChange }  
                value={ value }
                required
                />
        </div>
    )
}