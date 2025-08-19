import React from 'react'
import BarChar from './BarChar'
import { Box, useTheme } from '@mui/material';


export default function Bar() {
  const theme = useTheme();
  return <>
    <section>
        <Box style={{ minWidth: "150px" }}>
          <h1 style={{ color: theme.palette.info.main, fontSize: 25, margin: 0 }}>
            Bar Char
          </h1>
          <p style={{ margin: 0 }}> The minimum wage in Germany , Franca and Spain (EUR/month) </p>
        </Box>
    
    </section>
    <BarChar/>
  </>
}
