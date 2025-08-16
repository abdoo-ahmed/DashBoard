import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,

} from "@mui/icons-material";
import { Box, useTheme , Typography} from '@mui/material';

import { getUsers } from '../../supaBase';

export default function Invoices() {
      const theme = useTheme();
      const [rows, setRows] = useState([]);
      useEffect(() => {
          async function fetchData() {
            const data = await getUsers();
            setRows(data);
          }
          fetchData();
        }, []);
    const columns = [
      { field: "id", headerName: "ID", width: 50, align: "center", headerAlign: "center" },
      { field: "name", headerName: "Name", width: 150, flex: 1, align: "center", headerAlign: "center" },
      { field: "email", headerName: "Email", flex: 1, align: "center", headerAlign: "center" },
      { field: "age", headerName: "Age", width: 50, align: "center", headerAlign: "center" },
      { field: "phone", headerName: "Phone", flex: 1, align: "center", headerAlign: "center" },
     {
      field: "access",
      headerName: "Access",
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                ? theme.palette.secondary.dark
                : "#3da58a",
            color: "#fff",
            borderRadius: "5px",
            padding: "4px 8px",
            whiteSpace: "nowrap",
          }}
        >
          {access === "Admin" ? (
            <AdminPanelSettingsOutlined fontSize="small" />
          ) : access === "Manager" ? (
            <LockOpenOutlined fontSize="small" />
          ) : (
            <SecurityOutlined fontSize="small" />
          )}
          <Typography sx={{ fontSize: "14px" }}>{access}</Typography>
        </Box>
      ),
     },
      
    ];

  return <>

      
      <Box style={{ height: 400, width: "98%", mx: "auto" }}>
        <DataGrid checkboxSelection slots={{toolbar: GridToolbar,}} autoHeight  rows={rows} columns={columns} />
      </Box>
    </>
}
