import React from 'react'
import { DataGrid  } from '@mui/x-data-grid';
import { columns, rows } from './Data';


export default function Team() {

  return <>

  <div className="">
    Team
  </div>

  <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  
  
  </>
}
