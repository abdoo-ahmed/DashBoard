import React from 'react'
import { Box, useTheme } from '@mui/material'
import PieChart from './PieChart';


export default function Pie() {
  const theme = useTheme();
  return <>
    <section>
        <Box >
            <h1 style={{ color: theme.palette.info.main, fontSize: 25, margin: 0 }}>
            Pie Char
            </h1>
            <p style={{ margin: 0 }}> Simple Pie Char </p>
        </Box>
    </section>

    <PieChart/>

  </>
}
