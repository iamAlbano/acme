import * as React from 'react';
// import styles from './TablePatients.module.css'
import { useState, useEffect } from 'react'
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { BsPencil as EditIcon, BsFillTrashFill as DeleteIcon } from 'react-icons/bs'




export default function TablePatients( ) {

    const [patients, setPatients] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/patients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
          .then(data => {
            setPatients( data )
            setRows( data )
          }) 
          .catch((err) => console.log(err)) 

    }, [])

    const deletePatient = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            fetch(`http://localhost:5000/patients/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type':  'application/json'
                },

                }).then(
                    resp => resp.json()
                ).then (
                    data => {
                        setPatients(patients.filter( ( patient ) => patient.id !== id))
                        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
                    }
                ).catch(err => console.log(err))
          });
        },
        [],
      );

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nome', width: 300 },
        { field: 'cpf', headerName: 'CPF', width: 130 },
        { field: 'gender', headerName: 'Sexo', width: 130 },
        { field: 'status', headerName: 'Status', width: 120 },

       



        {
            field: 'actions',
            type: 'actions',
            headerName: 'Ações',
            width: 100,
            getActions: (params) => [

            <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"    
              />,

              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"    
                onClick={ deletePatient( params.id ) }
              />,

              
            ],
          },
    

      ];

    return (
        <>    

      <div style={{ height: 400, width: '900px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                components={{
                    Toolbar: GridToolbar,
                  }}
            />
            </div>
        </>
    )

}