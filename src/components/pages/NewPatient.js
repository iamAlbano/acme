import styles from './NewPatient.module.css'
import PatientForm from '../patients/PatientsForm'
import { useNavigate } from 'react-router-dom'

export default function NewPatient() {

    const history = useNavigate()

    function create( patient ) {

        fetch("http://localhost:5000/patients", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },

            body: JSON.stringify( patient ),

        }).then(
            ( resp => resp.json() )  

         ).then (
             (data) => {
                 console.log(data)
                 history('/pacientes', { msg: 'Paciente cadastrado com sucesso!' })
             }
         )
         .catch(err => console.log(err))
    }

    return (
        <div className={ styles.NewPatientContainer }>
            <h1>Cadastrar novo paciente</h1>
            <PatientForm handleSubmit={ create } type="Cadastrar" />
        </div>
    )
}