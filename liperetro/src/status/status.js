import * as React from 'react';
import './status.css';
import { Button } from "@mui/material";
import LRbar from '../bar/Bar';

export default function Status() {
  return (
    <>
      <LRbar />
      <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
      <div className='backgrand-status'>
        <h1 className="Text-status">STATUS</h1>
        <div>
          {/* <div>
        <Button  className='payment' variant="outlined" size="large">PAYMENT NO#1</Button>
      </div> */}
          <div class='payment-btn'>
            <a href="Statuspackage" class="btn"> Package 1999 </a>
          </div>
        </div>
      </div>
    </>
  );
}