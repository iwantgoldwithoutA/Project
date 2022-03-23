// import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './loginpage.css'
import { Link, Typography } from '@mui/material';
import React ,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const theme = createTheme();
export default function Login() {


  const navigate = useNavigate();
  
  const initialFormData = Object.freeze({
    username: "",
    password: "",

  });

  const [formData, updateFormData] = useState(initialFormData);

const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:1337/auth/local`, {
        identifier: formData.username,
        password: formData.password,
        
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.jwt);
        localStorage.setItem("is_auth",true);
        localStorage.setItem("UsernameDP", res.data.user.username)
        localStorage.setItem("userID" , res.data.user.id)
        //update access token
        axios.defaults.headers["Authorization"] =
          "Bearer " + localStorage.getItem("access_token");
          console.log(res)
        navigate("/home");
      });
  };

  return (
    <Box className='backgrand1'>
      <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div className='run'></div>
        <Box className='L-and-r' >
          <Button className='login' sx={{ ml: 4,color: '#6ab7d6' }} ><h4><Link href="login" underline="none" sx={{ color: '#6ab7d6' }} ><Typography fontFamily={'Mitr'} variant="h5">LOGIN</Typography></Link></h4></Button>
          <Button  disabled sx={{ ml: 2,color: '#6ab7d6' }} ><h1>|</h1></Button> 
          <Button className='register'  sx={{ ml: 2,color: '#6ab7d6' }} ><h4><Link href="register" underline="none" sx={{ color: '#6ab7d6' }}><Typography fontFamily={'Mitr'} variant="h5">REGISTER</Typography></Link></h4></Button>
        </Box>     
        <Box className='card-login'>
          <Box className='form-login'
            sx={{
              margin: 4 ,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box className='from-login' component="form" onSubmit={handleSubmit} noValidate>
            <Typography fontFamily={'Mitr'} variant="h6"><label className='Username' htmlFor='name'><h4>Username : </h4></label>
            </Typography>
              {/* <TextField
                margin="normal"
                required
                fullWidth                              
                id="email"
                label="Email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ mb: 2 ,backgroundColor: 'ActiveBorder' }}
              /> */}
               <input type="text4" id="fname2" name="username" className="fname2" placeholder="Username"value={formData.username} onChange={handleChange} />
              <Typography fontFamily={'Mitr'} variant="h6"><label className='password' htmlFor='password'><h4>Password : </h4></label>
              </Typography>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: 'ActiveBorder' }}
              /> */}
              <input type="password" id="fname1" name="password" className="fname1" placeholder="Password" value={formData.password} onChange={handleChange} />
              <Button
                type="submit"
                fullWidth
                onSubmit={handleSubmit}
                // variant="contained"
                sx={{ mt: 4, mb: 2, background: '#e4fcfd',color: '#6ab7d6' }}>
                <Typography fontFamily={'Mitr'} variant="h6">
                  CONTINUE
                </Typography>                
                
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
    </Box>
  );
}



