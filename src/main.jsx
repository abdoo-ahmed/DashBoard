import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Team from './Pages/Team/Team.jsx';
import Contacts from './Pages/Contacts/Contacts.jsx';
import Invoices from './Pages/Invoices/Invoices.jsx';
import Form from './Pages/Form/Form.jsx';
import Calendar from './Pages/Calendar/Calendar.jsx';
import Faq from './Pages/Faq/Faq.jsx';
import Bar from './Pages/Bar/Bar.jsx';
import Pie from './Pages/Pie/Pie.jsx';
import Line from './Pages/Line/Line.jsx';
import Geography from './Pages/Geography/Geography.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />

    </Route>
    

  )
);

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.StrictMode>
);
