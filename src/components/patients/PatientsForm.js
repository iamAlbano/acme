import styles from './PatientForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function PatientForm( { handleSubmit, patientData, type }) {

    const gender =  ["Feminino", "Masculino"] 
    const status = ["Ativo", "Inativo"]
    const [patients, setPatients] = useState([])

    const [patient, setPatient] = useState( patientData || { } )

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/patients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
          .then(data => {
            setPatients( data )
          }) 
          .catch((err) => console.log(err)) 

    }, [])
  

    const submit = (e) => {
        e.preventDefault()

      

        for(var i in patients){
            if(patients[i].cpf == e.target.cpf.value && patients[i].name != e.target.name.value){
                navigate('/cadastro', {state:  { message: 'CPF já cadastrado!', type: 'danger' } } )
                return
            }     
            
        }

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
                        value={ patient.status ? patient.status : 1 }
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