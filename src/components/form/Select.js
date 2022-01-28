import styles from './Select.module.css'

export default function Select( { label, name, handleOnChange, value, options } ) {

    return (
        <div className={ styles.formSelect }>
            <label htmlFor={ name }> { label }</label>
            <select name={ name } 
                    id={ name } 
                    onChange={ handleOnChange } 
                    defaultValue={{value: 0}}
                    required>

                <option value='Não selecionado' key='-1' >Selecione uma opção</option>

                { options.map( (option) => (
                    <option value={ option } key={ option }  >{ option }</option>
                )) }
            </select>
        </div>
    )
}