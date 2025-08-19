import React from 'react'

import { Box, useTheme } from '@mui/material'
import GeographyChart from './GeographyChart';




export default function Geography() {
  const theme = useTheme();
  return <>
    <section>
      <Box>
          <h1 style={{ color: theme.palette.info.main, fontSize: 25}}>
          Geography Char
          </h1>
          <p style={{ marginBottom: 0.6 }}> Simple Geography Char </p>
      </Box>
    </section>

    <GeographyChart/>
    
  </>
}
