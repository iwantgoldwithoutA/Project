import React ,{useState,useEffect} from "react";
import './review.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Avatar} from '@mui/material';
import {Grid, Typography,Toolbar, AppBar, Rating, FormControl} from "@mui/material";
import LRbar from '../bar/Bar';


function Review(){
    const [data ,setData] = useState([])
    const [comment, setComment] = useState({

        Headers: "",
    
        Descriptions: "",

        Rating: null,

        Name:`${localStorage.getItem('UsernameDP')}`,

        
        users_permissions_users:localStorage.getItem('userID')


    
    
    });

    function handleSubmit(e) {

        e.preventDefault();
    
        let url = "http://localhost:1337/reviews";
    
        fetch(url, {
    
          method: "POST",
    
          headers: { "Content-type": "application/json" },
    
          body: JSON.stringify(comment),
    
        })
    
          .then((response) => {
    
            // fetchHeros();
    
            setComment({Headers:"", Descriptions:"" ,Rating:null, Name:localStorage.getItem('UsernameDP') ,users_permissions_users:localStorage.getItem('userID') })
    
          })
    
          .catch((err) => console.log(err));
    
      }

      useEffect(async () => {
        try {
          const res = await fetch('http://localhost:1337/reviews')
          const set_data = await res.json()
          setData(set_data)
          console.log(set_data)
        } catch (error) {
            console.log(error)
          }
     }, [])
    return(
        <>
        <LRbar/>
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
        <div className="backgrand-review">
            <h1 className="Text">Review</h1>
            <div>
                {data.map((item)=> {
                    return(
                        <div>
                <Grid className="Tao" container spacing={2} columns={4}>
                    <Grid item xs={1}>
                    <Avatar className="avt1" alt=" " src={require("./image/avatar.png")} sx={{ width: 50, height: 50 }}/>
                    </Grid>
                    <Grid itam xs={3}>
                        <Typography fontFamily={'Mitr'} variant="h6" component="div" color="#6AB7D6">
                        {item.Name}
                        </Typography>
                        <Typography fontFamily={'Mitr'} variant="h6" component="div" color="#6AB7D6">
                        {item.Headers}
                        </Typography>
                        <Typography>
                            <Rating color="primary" value={item.Rating} name='read-only' readOnly />
                            {/* <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/> */}
                            </Typography>
                        <Typography fontFamily={'Mitr'} variant="body2" color="#6AB7D6">
                        {item.Descriptions}
                        </Typography>
                    </Grid>
                </Grid>
                </div>
                    )
                })}
            </div>
            {/* <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 , backgroundColor: '#6AB7D6' }}> */}
            {localStorage.getItem("is_auth") ? (
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
                    <Avatar className="avt2" alt=" " src={require("./image/avatar.png")} sx={{ width: 40, height: 40 }}/>
                    <div className='box-iii'>  
                    <Rating name="customized-10"   defaultValue={comment.Rating} max={5} size="large" onChange={(e) => setComment({ ...comment, Rating: e.target.value })} />
                    </div> 
                    </div>
                    
                                                              
                    <input type="text1" id="fname" name="fname" className="fname" placeholder="Headers" value={comment.Headers} onChange={(e) => setComment({ ...comment, Headers: e.target.value })} />
                    
                    <input type="text2" id="fname1" name="fname1" className="fname1" placeholder="Comment" value={comment.Descriptions} onChange={(e) => setComment({ ...comment, Descriptions: e.target.value })} />
                    
                    <input type="submit" value="Send" ></input>
                    </form>
                    </div>
                </FormControl> 
                </Typography> 
            </div>   
            ):( <></> )}
            
            {/* </AppBar> */}
        </div>
        </>
    )
}

export default Review;