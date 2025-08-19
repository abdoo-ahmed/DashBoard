import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button, useTheme } from '@mui/material'
import {  DownloadOutlined } from '@mui/icons-material'




export default function Dashboard() {
    const theme = useTheme();
  
  return <>
      
      <section className='mb-5'>
        <Box >
          <h1 style={{ color: theme.palette.info.main, fontWeight : 'bold' , fontSize: 25, margin: 0 }}>
          DASHBOARD
          </h1>
          <p style={{ margin: 0 }}> Welcome to your dashboard </p>
        </Box>
        <Box sx={{textAlign:"right"}}>
          <Button sx={{padding : '6px 8px' , textTransform: 'capitalize'}} variant='contained' color='primary'>
            <DownloadOutlined/>
            Download Reports
          </Button>
        </Box>
      </section>

    
    <Row1/>
    <Row2/>
    <Row3/>
  </>
}
