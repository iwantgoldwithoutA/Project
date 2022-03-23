import * as React from "react";
import LRbar from "../bar/Bar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./status.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Statuspackage() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:1337/bookings?users_permissions_users=${localStorage.getItem(
        "userID"
      )}`
    );
    setData(res.data);
    // console.log(res)
  }, []);

  return (
    <>
      <LRbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="backgrand-status1">
        <h1 className="Text-status">STATUS</h1>

        {/*  ถ้าล็อคอินแล้วแต่ยังไม่จอง ใส่หรือไม่ใส่ก็ได้ ทำไว้เผื่อๆ
                
                <h3 className='status-blank'>
                Nothing to see here
                </h3> */}

        {data.map((item) => {
          return (
            <div>
              {console.log(item)}
              <p className="status-border">
                <div className="Box-Usename1">
                  <div className="Box-Usename2">
                    <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                    <h2 className="Usename">
                      {localStorage.getItem("UsernameDP")}
                    </h2>
                  </div>
                  <h2 className="Package-status">{item.packages[0].NamePac}</h2>
                </div>

                <div className="Box-H-M">
                  <div className="Hotel">
                    <h2>Hotel</h2>
                    <h5 className="NameHotel">{item.hotels[0].Name}</h5>
                    <img
                      src={`http://localhost:1337${item.hotels[0].Image[0].url}`}
                    ></img>
                  </div>
                  <div className="Meal">
                    <h2>Meal</h2>
                    <h5 className="NameMeal">{item.foods[0].Coursename}</h5>
                    <img
                      src={`http://localhost:1337${item.foods[0].Image[0].url}`}
                    ></img>
                  </div>
                </div>

                <h1 className="topic-Additional">Additional:</h1>
                <div className="text-additional">
                  <div className="Additional">{item.Additional}</div>
                </div>

                <h1 className="topic-Adult">Person</h1>
                <div className="person-num">{item.Person} Person</div>

                <h2 className="Status">PAIDSTATUS</h2>
                <input value={item.status}></input>
                <div className="Evidence1">
                  <h2 className="Evidence">Evidence</h2>
                  <img src={`http://localhost:1337${item.image.url}`}></img>
                </div>

                <div className="Total1">
                  <h2 className="Total">TOTAL</h2>
                  <div className="price">{item.Prices} ฿</div>
                </div>
                <div>

                </div>
              </p>
              
            </div>
          );
        })}
        <div className="home1">
                <Link to="/home" className="home-btn">
                  Home
                </Link>
              </div>
      </div>
    </>
  );
}
