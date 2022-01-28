import styles from './Input.module.css'
import InputMask from "react-input-mask";

export default function Input( { type, label, placeholder, name, handleOnChange, value, required, mask} ) {

    return (
        <div className={ styles.formInput }>
            <label htmlFor={ name }> { label }</label>
            <InputMask
                type={ type } 
                name={ name } 
                placeholder={ placeholder } 
                id={name}
                onChange={ handleOnChange }  
                value={ value }
                mask={ mask }
                  
                
                {
                    ...required ==true && (
                        required={ required }
                    )
                }
                />
        </div>
    )
}