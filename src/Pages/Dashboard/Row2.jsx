import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import LineChart from '../../Pages/Line/LineChart'
import { DownloadOutlined } from '@mui/icons-material';

export default function Row2() {
  const theme = useTheme();
  
  return <>
    <Stack flexWrap="wrap" direction="row" gap={1} mt={3}>
  <Paper
    sx={{
      flex: "1 1 300px",
      border: "2px solid red",
    }}
  >


    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>

      <Box>
        <Typography color={theme.palette.secondary.main} mb={1} mt={2} ml={4} variant="h6">
          Revenue Genereted
        </Typography>

        <Typography ml={4} variant="body2">
          $59,342,32
        </Typography>

      </Box>


      <Box>
        <IconButton sx={{mr: 3}}>
          <DownloadOutlined/>
        </IconButton>
      </Box>


    </Stack>


    
    <LineChart isDashboard={true} />
  </Paper>

  <Box
    sx={{
      flex: "1 1 300px",
      height: 350,
      border: "2px solid red",
    }}
  >
    <Paper>
      <Typography
        color={theme.palette.secondary.main}
        fontWeight="bold"
        p={1.2}
        variant="h6"
      >
        Recent Transactions
      </Typography>
    </Paper>
  </Box>
</Stack>

  </>
}
