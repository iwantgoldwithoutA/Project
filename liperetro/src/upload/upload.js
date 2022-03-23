import { useState, useEffect } from "react";
import "./upload.css";
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import LRbar from "../bar/Bar";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Upload() {
  const [close, setClose] = useState(false)


  const [files,setFiles] = useState()

  const locate = useLocation();
  const {book} = locate.state
  console.log(book)


  const uploadImage = async (e) => {
    e.preventDefault();
    setClose(true)
    const formData = new FormData()

    formData.append('files', files[0])

    axios.post("http://localhost:1337/upload", formData)
    .then((response)=>{

      const imageId = response.data[0].id

      axios.post("http://localhost:1337/bookings",{
        image:imageId,
        Additional: book.Additional,
        Date: book.Date,
        Person: book.Person,
        Prices: book.Prices,
        foods: book.foods,
        hotels: book.hotels,
        packages: book.packages,
        status: false,
        users_permissions_users: localStorage.getItem('userID')
        

      }).then((response)=>{
        //handle success
      }).catch((error)=>{
          //handle error
        })
    }).catch((error)=>{
        //handle error
    })
}

  useEffect(() => {
    
  },[close])
  return (
    <>
    <LRbar/>
    { console.log()}
    <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
    <div className="App">
      <CssBaseline />
      <div className="text">
        Payment : Upload

      </div>


      <div className="upload">

        <form >
        <input 
          onChange={(e)=>setFiles(e.target.files)} 
          type="file"/>
        <input onClick={uploadImage} type="submit"disabled={close} value="Submit"/>
         
        </form>
        
      </div>

      <Box className="next-app">
        {/* <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', backgroundColor: '#6AB7D6'}}> 
        BACK
        </Button> */}
        <div class='back-payment'>
            <a href="payment" class="btn"> Back </a> 
        </div>
        
        <div  class='back-payment'>
            <a href="/submitpayment" class="btn" > Next </a> 
        </div>
        {/* <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px' , backgroundColor: '#6AB7D6'}}>
          NEXT
        </Button> */}
      </Box>
    </div>
    </>
  );
}

