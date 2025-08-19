import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Cart from './Cart'
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import { data1, data2, data3, data4 } from './data'
export default function Row1() {
    const theme = useTheme();
  return <>
    
    <Stack direction={'row'} flexWrap={"wrap"} gap={1} justifyContent={{xs:'center' , sm : "space-between"}}>
        <Cart icon={<EmailIcon sx={{fontSize:"23px" , color : theme.palette.secondary.main}} />} title={"12,361"} scheme={"nivo"} supTitle={"Emails Sent"} data={data1} increase={"+14%"}/>
        <Cart icon={<PointOfSaleIcon sx={{fontSize:"23px" , color : theme.palette.secondary.main}} />} title={"431,225"} scheme={"paired"} supTitle={"Sales obtained"} data={data2} increase={"+21%"}/>
        <Cart icon={<PersonAddIcon sx={{fontSize:"23px" , color : theme.palette.secondary.main}} />} title={"23,445"} scheme={"accent"} supTitle={"New Clients"} data={data3} increase={"+5%"}/>
        <Cart icon={<TrafficIcon sx={{fontSize:"23px" , color : theme.palette.secondary.main}} />} title={"1,325,441"} scheme={"dark2"} supTitle={"Traffic Received"} data={data4} increase={"+43%"}/>

        


    </Stack>
  
  </>
}
