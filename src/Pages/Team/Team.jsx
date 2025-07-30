import React from 'react'
import { DataGrid  } from '@mui/x-data-grid';
import {  rows } from './Data';
import { Box, useTheme , Typography} from '@mui/material';
import { AdminPanelSettingsOutlined , LockOpenOutlined , Padding, SecurityOutlined } from '@mui/icons-material';

export default function Team() {

  const theme = useTheme();
  
  const columns = [
  { field: 'id', headerName: 'ID' , width: 30 , align: 'center' , headerAlign:"center"},
  { field: 'name', headerName: 'Name' , flex : 1 , align: 'center' , headerAlign:"center"},
  { field: 'email', headerName: 'Email', flex : 1 , align: 'center' , headerAlign:"center"},
  { field: 'age', headerName: 'Age' , align: 'center' , headerAlign:"center"},
  { field: 'phone', headerName: 'Phone' , flex : 1 , align: 'center' , headerAlign:"center"},
  { field: 'access', headerName: 'Access' , flex : 1 , align: 'center' , headerAlign:"center" ,
    renderCell : ({row : {access}}) => { 
  return <>

   
   <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor:
              access === 'Admin'
                ? theme.palette.primary.dark
                : access === 'Manager'
                ? theme.palette.secondary.dark
                : '#3da58a',
            color: '#fff',
            borderRadius: '5px',
            padding: '4px 8px',
          }}
        >
          {access === 'Admin' ? (
            <AdminPanelSettingsOutlined fontSize="small" />
          ) : access === 'Manager' ? (
            <LockOpenOutlined fontSize="small" />
          ) : (
            <SecurityOutlined fontSize="small" />
          )}
          <Typography sx={{ fontSize: '15px' }}>{access}</Typography>
        </Box>
      </Box>
  
  
  
  
  </>
  },
}

];




  return <>
   <div>
      <h1 style={{color: theme.palette.info.main , fontSize : 25 , margin : 0 }}>
        TEAM
      </h1>

      <p style={{ marginTop : 0 }}>
        Managing the Team Members
      </p>

    </div>

  <Box style={{ height: 500 , width : '98%' , mx : "auto"}}>
    <DataGrid autoHeight  rows={rows} columns={columns} />
  </Box>
  
  
  </>
}
