import LRbar from "../bar/Bar";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Home_disp from "./home_dp";

function Home() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let res = await axios.get("http://localhost:1337/suggests");
    // console.log(res);
    setData(res.data);
  }, []);

  return (
    <>
      <LRbar/>
      <div className="suggest">Suggest</div>

      {console.log(data)}

      <div className="cardbox">
        {data.map((item) => {
        //   console.log(item);
          return (
           <Home_disp key={item.id} item={item}/>
          );
        })}
        <div className="box-btn">
          <a href="package" className="btn">
            {" "}
            Package{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
