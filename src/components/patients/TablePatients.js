import * as React from 'react';
import styles from './TablePatients.module.css'
import { DataGrid } from '@material-ui/data-grid'


export default function TablePatients( { rows }) {

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
        <>    

      <div style={{ height: 400, width: '900px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
            </div>
        </>
    )

}