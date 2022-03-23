import React, { useState, useEffect } from "react";
import "./package.css";
import LRbar from "../bar/Bar";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonLogin from "../bar/Button-login";

function Package() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let res = await axios.get("http://localhost:1337/packages");
    console.log(res);
    setData(res.data);

  }, []);
  return (
    <>
      <LRbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap"
        rel="stylesheet"
      />
      <section class="package">
        {/* <CssBaseline />*/}
        <div class="row">
          <div class="image">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NiFiG-0DoQE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="content1">
            <h3>LIPE RETRO</h3>
            <p>
              LIPE RETRO is a touring company that co-operating with local to
              ensured customer will get the best experience with Koh Lipe as
              much as possible, with our latest, modern and passionate touring
              system, customer can enjoy their trip to Koh Lipe without any
              concerned. We hope you get the best memorable part of your life
              here!!!
            </p>
          </div>
        </div>

        <section className="package1">
          <h1 class="heading">
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>S</span>
          </h1>
          <div class="box-container">
            {data.map((item) => {
              console.log(item)
              return (
                <div class="box">
                  <img
                    width={200}
                    src={`http://localhost:1337${item.Preview.url}`}
                    alt=""
                  />
                  <div class="content">
                    <h3 style={{ color: "#6AB7D6" }}>{item.NamePac}</h3>

                    <p style={{ color: "rgb(68, 68, 68)" }}>
                      {item.Detail_about_package}
                    </p>

                    <div class="price-package" style={{ color: "#6AB7D6" }}>
                      {item.Price} ฿
                    </div>
                    {localStorage.getItem("is_auth") ? (
                      <>
                        <a href={`packageChoose/${item.id}`} class="btn">
                          Book now
                        </a>
                        {/* <div className='you'></div> */}
                      </>

                    ) : (
                      //  <ButtonLogin/> 
                      <Link to='/login'>
                        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet" />
                        <button className='btn-login-package'>
                          Log in
                        </button>
                      </Link>
                    )
                    }

                  </div>
                </div>
              );
            })}
            <div class="back">
              <a href="home" class="btn">
                {" "}
                Back{" "}
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Package;
