// import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './register.css'
import { Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { truncate } from 'lodash';
import { set } from 'lodash';



const theme = createTheme();

export default function Register() {
    const [register, setRegister] = useState({

        username: "",

        email: "",

        password: "",

        confirmed: false


    });
    const handleSubmit = (e) => {
        e.preventDefault();

        let url = "http://localhost:1337/users";

        fetch(url, {

            method: "POST",

            headers: { "Content-type": "application/json" },

            body: JSON.stringify(register),

        })

            .then((response) => {

                // fetchHeros();

                setRegister({ username: "", email: "", password: "" ,confirmed:false})

            })

            .catch((err) => console.log(err));

    };

    return (
        <Box className='backgrand2'>
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
            <ThemeProvider theme={theme}>

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className='dun'></div>
                    <Box className='L-and-r' >
                        <Button className='login' sx={{ ml: 5, color: '#6ab7d6' }} ><h4><Link href="login" underline="none" sx={{ color: '#6ab7d6' }} ><Typography fontFamily={'Mitr'} variant="h5">LOGIN</Typography></Link></h4></Button>
                        <Button disabled sx={{ ml: 2, color: '#6ab7d6' }} ><h1>|</h1></Button>

                        <Button className='register' sx={{ ml: 1, color: '#6ab7d6' }} ><h4><Link href="register" underline="none" sx={{ color: '#6ab7d6' }}><Typography fontFamily={'Mitr'} variant="h5">REGISTER</Typography></Link></h4></Button>
                    </Box>
                    <Box className='card1' >
                        <Box

                            sx={{
                                margin: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>

                            <Box component="form" sx={{ mt: 0 }} >
                                <form className="form"   >
                                    <Typography fontFamily={'Mitr'} variant="h6"><label className='Username' htmlFor='name'>Username : </label>
                                    </Typography >

                                    <input type="text6" id="fname2" name="fname2" className="fname2" placeholder="Username" value={register.username} onChange={(e) => setRegister({ ...register, username: e.target.value })} />


                                    <Typography fontFamily={'Mitr'} variant="h6"><label className='Email' htmlFor='email'>Email : </label>
                                    </Typography>

                                    <input type="text7" id="fname" name="fname" className="fname" placeholder="Email" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                                    <Typography fontFamily={'Mitr'} variant="h6"><label className='password1' htmlFor='password'>Password : </label>
                                    </Typography>

                                    <input type="password" id="fname1" name="fname1" className="fname1" placeholder="Password" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                                    <div class="form-check" >
                                        <input class="form-check-input" type="checkbox"  id="flexCheckDefault" value={true} checked={register.confirmed} onClick={(e) => setRegister({ ...register, confirmed: e.target.value })} ></input>
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Confirm password
                                            </label>
                                    </div>


                                    <input  type="submit" href="/login" value="CONTNUE" onClick={handleSubmit} ></input>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Container>

            </ThemeProvider>
        </Box>
    );
}

