import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './submitpayment.css'
import LRbar from '../bar/Bar';

export default function SubmitPayment() {
    return (
        <>
        <LRbar/>
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
        <div className='Boxcrad'>
            <Card sx={{
                maxWidth: 300,
            }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"                    
                    src={require("./image.png")}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'Mitr'} sx={{ textAlign: 'center' , color: '#6ab7d6' ,   }}>
                        PAYMENT SUCCESS
                    </Typography>
                    <Typography variant="h6" color="text.secondary" fontFamily={'Mitr'} sx={{ mt: 3 ,textAlign: 'center' }}>
                        Please wait for admin to comfirm your payment
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="home" size='big' sx={{ background: '#e4fcfd',color: '#6ab7d6'}}><Typography fontFamily={'Mitr'}>home</Typography></Button>
                </CardActions>
            </Card>
        </div>
        </>
    );
}