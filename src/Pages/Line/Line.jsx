import React from 'react'
import { Box, useTheme } from '@mui/material'
import LineChart from './LineChart';


export default function Line() {
  const theme = useTheme();
  return <>

    <section>
      <Box >
          <h1 style={{ color: theme.palette.info.main, fontSize: 25, margin: 0 }}>
          Line Char
          </h1>
          <p style={{ margin: 0 }}> Simple Line Char </p>
      </Box>
    </section>

    <LineChart/>

    
  </>
}
