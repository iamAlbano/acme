import * as React from 'react';
import styles from './TablePatients.module.css'
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { BsPencil as EditIcon, BsFillTrashFill as DeleteIcon } from 'react-icons/bs'


export default function TablePatients( { rows }) {

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