import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import { DataGrid } from '@material-ui/data-grid'


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

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nome', width: 180 },
        { field: 'cpf', headerName: 'CPF', width: 130 },
        { field: 'gender', headerName: 'Sexo', width: 130 },
        {
          field: 'date',
          headerName: 'Data de nascimento',
          type: 'date',
          width: 200,
        },

        { field: 'status', headerName: 'Status', width: 120 },

      ];

    return (
        <div className={ styles.ListPatientContainer }>
            <h1>Pacientes</h1>

          




            <div style={{ height: 400, width: '900px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            </div>

            
            

            { message && (
                <Message message={ message } type="success" />
            )}

        </div>
    )
}