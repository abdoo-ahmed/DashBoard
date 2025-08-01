import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {grey} from '@mui/material/colors';

import { Avatar, styled, Typography, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from 'react-router-dom';












const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open
    ? {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
}));

export default function SideBar({open , handleDrawerClose}) {

    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const Array1 =[
        {
            "text":"Dashboard",
            "icon" : <HomeOutlinedIcon/>,
            "path" : '/'
        },

        {
            "text":"Manage Team",
            "icon" : <PeopleOutlinedIcon/>,
            "path" : '/team'
        },

        {
            "text":"Contacts Information",
            "icon" : <ContactsOutlinedIcon/>,
            "path" : '/contacts'
        },

        {
            "text":"Invoices Balances",
            "icon" : <ReceiptOutlinedIcon/>,
            "path" : '/invoices'
        },
    ];


    const Array2 = [
        { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
        { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
        { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
    ];

    const Array3 = [
        { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
        { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
        { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
        { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
    ];


  return <>

    <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <Avatar sx={{mx : "auto" , transition : "0.25s" , width : open ? 100 : 55 , height : open ? 100 : 55 , my : 1 , border : "2px solid grey" }} alt="Travis Howard" src="https://i0.wp.com/alaa.njmsyria.com/wp-content/uploads/2023/07/93e9e96a4a9538ebef08f7387c73c643.jpg" />

        <Typography sx={{ fontSize : open ? 18 : 0 , transition : "0.25s" }} align='center'>  layla </Typography>
        <Typography sx={{ fontSize : open ? 15 : 0 , transition : "0.25s" , color : theme.palette.info.main }} align='center'>  Admin </Typography>



        <Divider />

        <List>
          {Array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  height : '10px',
                  bgcolor : location.pathname === item.path ? theme.palette.mode === "dark" ? grey[700] : grey[400] :"" ,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor : location.pathname === item.path ? "grey" :"" ,
                  height : '10px',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />


        <List>
          {Array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block'}}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path)
                }}
                sx={{
                  minHeight: 40,
                  height : '10px' ,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor : location.pathname === item.path ? "grey" :""
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    my : 'auto' ,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>



      </Drawer>
  
  
  
  </>
}
