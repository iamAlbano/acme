import styles from './Patient.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import { BsPencil as EditIcon } from 'react-icons/bs'
import PatientForm from '../patients/PatientsForm'
import { useNavigate } from 'react-router-dom'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'

export default function Project(){

    const{ id } = useParams()
    const navigate = useNavigate()
    const [patient, setPatient] = useState([])
    const [showEditForm, setShowEditForm] = useState(false)
    const location = useLocation()
    let message = ''
    let type = ''
    if(location.state) {
        message = location.state.message
        type = location.state.type
    }

    useEffect(() => {
        fetch(`http://localhost:5000/patients/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
          .then((resp) => resp.json())
          .then((data) => {
              setPatient(data)
          })
          .catch((err) => console.log(err))
    }, [id])

    function updatePatient( patient ) {
        fetch( `http://localhost:5000/patients/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patient),
        })
        .then(resp => resp.json())
        .then((data) => {

            setPatient( data )
            setShowEditForm(false)
            navigate(`/paciente/${id}`, {state:  { message: 'Dados alterados com sucesso!', type: "success" } } )
        })
        .catch( err => console.log(err))
    }


    function toggleEditForm() {
        setShowEditForm(!showEditForm)
    }




    return (
        <div className={ styles.patientDetails }>
            
            <Container customClass="column">
                <div className={ styles.detailsContainer }>
                    <h1>{patient.name}</h1>
               
                    <button onClick={toggleEditForm } className={ styles.btn }> 
                         { !showEditForm ? 'Editar' : 'Visualizar ficha' }
                    </button>

                    { !showEditForm ? (
                        <div className={ styles.info } >
                            <p>
                                <span>Status: </span> {patient.status}
                            </p>

                            <p>
                                <span>CPF: </span> {patient.cpf}
                            </p>

                            <p>
                                <span>Gênero: </span> {patient.gender}
                            </p>

                            <p>
                                <span>Data de nascimento: </span> {patient.date}
                            </p>

                            <p>
                                <span>Endereço: </span> {patient.address}
                            </p>
                        </div>
                    ) : (
                        <div className={ styles.info }>
                            <PatientForm type="Salvar alterações"  patientData={ patient } handleSubmit={ updatePatient }/>
                        </div>
                    )
                    }
                    { message && (
                        <Message message={ message } type={ type } />
                    )}
                </div>
            </Container >
        </div>
    )
}