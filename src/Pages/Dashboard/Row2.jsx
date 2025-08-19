import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import LineChart from '../../Pages/Line/LineChart'
import { DownloadOutlined } from '@mui/icons-material';
import { Transactions } from './data';

export default function Row2() {

  const theme = useTheme();
  
  return <>

    <Stack flexWrap="wrap" direction="row" gap={1.5} mt={3}>
      <Paper
        sx={{
          flex: "1 1 300px",
          minWidth:"300px"
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
          maxHeight: 360,
          overflow : 'auto', 
          minWidth:"250px",
          borderRadius:"5px",
        }}>

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

        
        {Transactions.map(() => { 
          return <>

            <Paper  sx={{mt:1 , display : 'flex' , justifyContent:"space-between" , alignItems : "center"}}>
          <Box p={1.5}>
            <Typography variant='body1' fontWeight="600">
              Test
            </Typography>

            <Typography variant='body2'>
              Test
            </Typography>
          </Box>
          
          <Typography variant='body1'>
            Test
          </Typography>
          <Typography p={1} borderRadius={1.4} bgcolor={theme.palette.error.main} color={theme.palette.getContrastText(theme.palette.error.main)} variant='body2'>
            $500
          </Typography>
        </Paper>
          
          </>
         })}
      </Box>
    </Stack>

  </>
}
