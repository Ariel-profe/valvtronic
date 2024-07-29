"use client";

import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { User } from '@prisma/client';
import { Heading } from '../ui/Heading';

export const ManageClients = ({users}:{users:any}) => {

    let rows:any = [];

    if(users){
        rows = users.map( (user:User) =>{
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });
    };

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 220},
        {field: 'name', headerName: 'Nombre', width: 220},
        {field: 'email', headerName: 'Email', width: 300},
        {field: 'role', headerName: 'Role', width: 220},
    ]
    
  return (
    <div className='container mx-auto px-6'>
        <div className='my-8'>
            <Heading title={'Administración de usuarios'} center />
        </div>
        <div style={{height: 600, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    </div>
  )
}
