import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';

const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;

  const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
];

export default function Form() {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    handleClick()
  }
  return <>
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display : 'flex' , flexDirection : "column"  , gap : 3}}
      noValidate
      autoComplete="off"
    >
    
      <Stack sx={{gap : 2}} direction={"row"}>
      <TextField error={Boolean(errors.firstName)} helperText= { errors.firstName ? "This Field is Required , Min 3 Character and Max 15 Character" : null}  {...register("firstName", { required: true, maxLength: 15 , minLength: 3 })} sx={{flex : 1}} label="First Name" variant="filled" />
      <TextField sx={{flex : 1}} error={Boolean(errors.lastName)} helperText= { errors.lastName ? "This Field is Required and Min 3 Character" : null}  {...register("lastName", { required: true, minLength: 3 })} label="Last Name" variant="filled" />
      </Stack>
      <TextField error={Boolean(errors.Email)} helperText= { errors.Email ? "Please provide a valid email address" : null}  {...register("Email", { required: true , pattern: emailRegex })} label="Email" variant="filled" />
      <TextField  error={Boolean(errors.ContactNumber)} helperText= { errors.ContactNumber ? "Please provide a valid Phone Number" : null}  {...register("ContactNumber", { required: true  , pattern: phoneRegex })} label="Contact Number" variant="filled" />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
       <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      <Snackbar open={open} anchorOrigin={{ vertical: "top", horizontal:'right' }} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Account created successfully
        </Alert>
      </Snackbar>

      <Box sx={{marginLeft: "auto"}}>
        <Button type='submit' sx={{ textTransform : "capitalize"}} variant='contained'>
          create New User
        </Button>
      </Box>

    </Box>
  </>
}
