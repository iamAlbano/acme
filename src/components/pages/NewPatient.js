import styles from './NewPatient.module.css'
import PatientForm from '../patients/PatientsForm'
import { useNavigate } from 'react-router-dom'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'

export default function NewPatient() {

    const navigate = useNavigate()
    const location = useLocation()
    let message = ''
    let type = ''

    if(location.state) {
        message = location.state.message
        type = location.state.type
    }

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
                 navigate('/pacientes', {state:  { message: 'Paciente cadastrado com sucesso!', type: "success" } } )
             }
         )
         .catch(err => console.log(err))
    }

    return (
        <div className={ styles.NewPatientContainer }>
            { message && (
                <Message message={ message } type={ type } />
            )}
            <h1>Cadastrar novo paciente</h1>
            <PatientForm handleSubmit={ create } type="Cadastrar" />

            
        </div>
    )
}