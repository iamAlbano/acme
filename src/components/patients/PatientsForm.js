import styles from './PatientForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import Grid from '@mui/material/Grid'

import { useState } from 'react'


export default function PatientForm( { handleSubmit, patientData, type }) {

    const gender =  ["Feminino", "Masculino"] 
    const status = ["Ativo", "Inativo"]

    const [patient, setPatient] = useState( patientData || { } )

    const submit = (e) => {
        e.preventDefault()
        handleSubmit( patient )
    }

    function handleChange(e) { 

        setPatient( { ...patient, [ e.target.name ]: e.target.value })
    }

    return (
        <form onSubmit={ submit } className={ styles.form }>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Input 
                        type="text"
                        name="name"
                        required={ true }
                        value={ patient.name ? patient.name : '' } 
                        placeholder="Insira o nome do paciente"
                        handleOnChange={ handleChange }
                        label="Nome do paciente" />
                </Grid>

                <Grid item xs={6}>
                    <Input 
                        type="text"
                        name="cpf"      
                        label="CPF"
                        mask="999.999.999-99"
                        required={ true }
                        value={ patient.cpf ? patient.cpf : ''} 
                        handleOnChange={ handleChange }
                        placeholder="xxx.xxx.xxx-xx" />
                </Grid>
            </Grid>


            <Input 
                type="date"
                name="date"  
                required={ true }
                value={ patient.date ? patient.date : ''}    
                handleOnChange={ handleChange }
                label="Data de nascimento" />   



           
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Select 
                        name="gender"
                        label="Sexo"
                        value={ patient.gender ? patient.gender : 'Feminino' }
                        handleOnChange={ handleChange }
                        options={ gender } />
                </Grid>

                <Grid item xs={6}>
                    <Select 
                        name="status"
                        label="Status"
                        required={ true }
                        value={ patient.status ? patient.status : 'Ativo' }
                        handleOnChange={ handleChange }
                        options={ status } />
                </Grid>
            </Grid>

 

            <Input 
                type="text"
                name="address" 
                value={ patient.address ? patient.address : ''}      
                label="Endereço (opcional)"
                handleOnChange={ handleChange }
                placeholder="Endereço do paciente" />

            

            <Submit text={ type } />
            
        </form>
    )
}