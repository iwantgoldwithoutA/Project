import React ,{useState,useEffect} from "react";
// import './review.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Avatar} from '@mui/material';
import {Grid, Typography,Toolbar, AppBar, Rating, FormControl} from "@mui/material";
// import LRbar from '../bar/Bar';

export default function Re() {
    // const [data ,setData] = useState([])
    const [register, setRegister] = useState({

        username: "",
    
        email: "",

        password:""



    
    
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
    
            setRegister({username:"", email:"" ,password:""})
    
          })
    
          .catch((err) => console.log(err));
        
    };

    return(
        <div className="box-review"> 
                {/* <Toolbar>  */}
                
                {/* <Typography component="legend"></Typography> */}
                {/* <Rating name="customized-10" defaultValue={comment.Rating} max={5} size="large" onChange={(e) => setComent({ ...comment, Rating: e.target.value })} /> */}
                {/* </Toolbar> */}
                <Typography className="Teen">
                <FormControl> 
                    <div className="form-star" >
                    <form className="form"   onSubmit={handleSubmit}>
                    {/* <label for="fname"></label> */}
                    <div className='box-ii'> 
                    <Avatar alt=" " src={require("./image/avatar.png")}/>
                    <div className='box-iii'>  
                    {/* <Rating name="customized-10"   defaultValue={register.Rating} max={5} size="large" onChange={(e) => setRegister({ ...comment, Rating: e.target.value })} /> */}
                    </div> 
                    </div>
                    <input type="text3" id="fname2" name="fname2" className="fname2" placeholder="Username"value={register.username} onChange={(e) => setRegister({ ...register, username: e.target.value })} />
                                                              
                    <input type="text1" id="fname" name="fname" className="fname" placeholder="Email" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                    
                    <input type="password" id="fname1" name="fname1" className="fname1" placeholder="Password" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                    
                    <input type="submit" value="Send" ></input>
                    </form>
                    </div>
                </FormControl> 
                </Typography> 
            </div>   
    )
}