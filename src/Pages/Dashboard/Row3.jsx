import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import PieChart from '../Pie/PieChart'
import BarChar from '../Bar/BarChar'
import GeographyChart from '../Geography/GeographyChart'


export default function Row3() {
  return <>
    <Stack         direction={{ xs: "column", sm: "row" }} // responsive direction
        flexWrap="wrap" mt={2} gap={1}>
      <Paper sx={{
            flex: "1 1 100%", // small screen => full width
            "@media (min-width:600px)": { flex: "1 1 48%" }, // medium screen => half width
            "@media (min-width:900px)": { flex: "1 1 32%" }, // large screen => third width
          }}>
        <PieChart/>
      </Paper>
      <Paper sx={{
            minWidth:'350px',
            flex: "1 1 100%",
            "@media (min-width:600px)": { flex: "1 1 48%" },
            "@media (min-width:900px)": { flex: "1 1 32%" },
          }}>
        <BarChar/>
      </Paper>
      <Paper sx={{
            flex: "1 1 100%",
            "@media (min-width:600px)": { flex: "1 1 48%" },
            "@media (min-width:900px)": { flex: "1 1 32%" },
          }}>
        <GeographyChart isDashboard={true} />
      </Paper>

    </Stack>  
  </>
}
