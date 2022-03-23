import React, { useState, useEffect } from 'react';
import './Package.css';
import LRbar from '../bar/Bar';
import axios from 'axios';
import { Rating } from '@mui/material';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'; 
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'
import { FormControl } from 'react-bootstrap';




function PackageChoose() {

    let { id } = useParams()

   



    const [hotel, setHotel] = useState([]);
    useEffect(async () => {
        let res = await axios.get("http://localhost:1337/hotels");
        // console.log(res.data);
        setHotel(res.data);
        console.log(res)
    }, []);



    const [food, setFood] = useState([]);
    useEffect(async () => {
        let res = await axios.get("http://localhost:1337/foods");
        // console.log(res.data);
        setFood(res.data);
    }, []);

    const [image, setImage] = useState("");
    const [pack, setPack] = useState({});
    useEffect(async () => {
        let res = await axios.get(`http://localhost:1337/packages/${id}`);
        console.log(res.data);
        setPack(res.data);
        setImage(res.data.Preview.url)
    }, []);


    const navigate = useNavigate()

    const [book,setBook] = useState({
            Additional: "",
            Person: 1,
            foods: null,
            hotels: null,
            packages: id,
            Prices:pack.Price,
            status: false,
            Date:null,
            users_permissions_users:localStorage.getItem('userID')

    })
    
    function handleChoose(e) {
        
        const selectState = food.filter((d) => d.id == e.target.value(e));
        e.preventDefault();
    
        let url = "http://localhost:1337/bookings";
    
        fetch(url, {
    
          method: "POST",
    
          headers: { "Content-type": "application/json" },
    
          body: JSON.stringify(book),
    
        })
    
          .then((response) => {
    
            // fetchHeros();
    
            setBook({Additional: "",
            Person: 1,
            foods:null,
            hotels:null,
            packages:id,
            Prices: pack.Price,
            status: false,
            Date:null,
            users_permissions_users:localStorage.getItem('userID')})
            console.log(response)
            navigate("/payment")
          })
          
          .catch((err) => console.log(err));
          
      }



    
    console.log(id)
    
    useEffect(() => {

    }, [])
    return (
        <>

            <LRbar />
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
            <div className='backgrand-status2'>
                <br />
                <div className="pics">
                    <img src={`http://localhost:1337${image}`}/>
                </div>

                <p className='description'>
                    {pack.Detail_about_packages}
                </p>

                <form className='hotel-form' >

                    <h2>Hotel</h2>
                    {/* <div className="container"> */}
                        <select onChange={(e) =>{setBook({...book,hotels: e.target.value})}}
                            className="custom-select"
                            value={hotel?.id }
                        
                        >
                            {hotel.map((item) => (
                                <option key={item.id} value={item.id} >
                                    {item.Name}
                                </option>
                                
                            ))}
                        </select>
                        {hotel.id ? (
                            <img
                            src={`http://localhost:1337${hotel.Image.url}`}
                            width="100%"
                            height="100%"/>
                        ) : ( ""
                            )}
                        {/* {hotel.id ? (
                            <img
                            src={`http://localhost:1337${hotel.Image.url}`}
                            width="100%"
                            height="100%"/>
                        ) : ( ""
                            )} */}
                    {/* </div> */}
                   
                {/* </form> */}

                <br /><br />

                {/* <form className='meal-form'> */}

                    <h2>Meal</h2>
                    {/* <div className="container"> */}
                        <select onChange={(e) => setBook({...book,foods:e.target.value})}
                            className="custom-select"
                            value={food?.id}

                        >
                            {food.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.Coursename}
                                </option>
                            ))}
                        </select>
                        <h1 className='topic'>
                        Date
                        <FormControl value={book.Date} onChange={(e) => setBook({ ...book, Date: e.target.value })} type="date" required></FormControl>
                    </h1>
                    
                 
                    <h1 className='topic'>
                        Additional :
                    </h1>


                    <input type="text" className='additional' rows="2" value={book.Additional} onChange={(e) => setBook({ ...book, Additional: e.target.value })} required />

                    <h1 className='topic'>
                        Person
                    </h1>
                    
                    <input min="1" max="10" className='person' type="number" value={book.Person} onChange={(e) => setBook({ ...book, Person: e.target.value })} />
                    <div className='price-booking' value={book.Prices=pack.Price*book.Person} onChange={(e) => setBook({ ...book, Prices: e.target.value })}>Total : {pack.Price*book.Person} Baht</div>
                    {/* <a value={pack.Price*book.Person} onChange={(e) => setBook({ ...book, Prices: e.target.value })}>{pack.Price*book.Person}</a> */}
                
                </form>

                <Link state={{book:book}} to="/payment" className="btn-booking">Booking</Link>
                <a href='/package' className='btn-back'>Back</a>


                <br />


            </div>

        </>
    )
}

export default PackageChoose;