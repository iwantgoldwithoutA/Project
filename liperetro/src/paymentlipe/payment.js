import './payment.css';
import './button.css';
import AppHeader from './AppHeader';
import Logopyment from './Logopyment'; 
import payments from './datapayment';
import { useState } from 'react';
import LogopaymentPost from './LogopaymentPost';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import LRbar from '../bar/Bar';
import { Link, useLocation } from 'react-router-dom';

function Payment() {  

  
  const locate = useLocation();
  const {book} = locate.state
  console.log(book)

  const [selectedlogo,setSelectedlogo] = useState(null); 

  function onPaymentOpenClick(thePayment) {
    setSelectedlogo(payments[thePayment]);

  } 
  function onPaymentCloseClick(thePayment) {
    setSelectedlogo(payments[null]);

  }

  const paymentElements = payments.map((payment,index)=>{
    return<Logopyment key={index} payment={payment} onpaymentClick={()=>onPaymentOpenClick(index)}/>;
  });
  let paymentpost = null;
  if(!!selectedlogo){
    paymentpost = <LogopaymentPost payment={selectedlogo} onBgClick={onPaymentCloseClick}/> 

  }
  return (
    <>
    <LRbar/>
    <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
    <div className="app"> 
      <AppHeader/>
      <div className='box-app-grip'>
      <div className="app-grip"> 
       {paymentElements}
      </div>
      </div> 
      {paymentpost}
      <div className="next-app-payment">
        {/* <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}} sx={{background: '#6AB7D6' , fontSize: '18px'}}>
          BACK
        </Button>
        <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}} sx={{background: '#6AB7D6' , fontSize: '18px'}}>
          NEXT
        </Button> */}
        <div class='back-payment'>
            <a href="booking" class="btn"> Back </a> 
        </div>
        <form class='back-payment'>
            <Link state={{book:book}} to="/upload" class="btn"> Next </Link>
            
        </form>
       
      </div>          
      
    </div>
    </>
  );
}

export default Payment;
