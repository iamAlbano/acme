import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import TablePatients from '../patients/TablePatients';

import styles from './ListPatients.module.css'

export default function ListPatients() {

 
    const [patients, setPatients] = useState([])
    const [rows, setRows] =useState([])

    const location = useLocation()
    let message = ''

    if(location.state) {
        message = location.state.message
    }


    useEffect(() => {
        fetch('http://localhost:5000/patients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
          .then(data => {
            setPatients(data)
            setRows( data )
          }) 
          .catch((err) => console.log(err)) 


    }, [])

    

    return (
        <div className={ styles.ListPatientContainer }>
            <h1>Pacientes</h1>

            <TablePatients rows={ rows }/>

            { message && (
                <Message message={ message } type="success" />
            )}

        </div>
    )
}