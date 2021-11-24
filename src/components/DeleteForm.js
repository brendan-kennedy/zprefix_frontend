import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function DeleteForm() {

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [blogs, setBlogs] = useState ([]);
    
    const fetchResults = async () => {
        let url = window.location.href
      let parts = url.split('/')
      let id = parts.pop() || parts.pop()
      //console.log(id)
        const data = await fetch(
            `https://zprefix-backend.herokuapp.com/blogs/${id}`
        );
    
        const blogs = await data.json();
        //console.log(blogs);
        setBlogs(blogs);
    
        };

    const handleClick = () => { 
        let url = window.location.href
      let parts = url.split('/')
      let id = parts.pop() || parts.pop()

        fetch(`https://zprefix-backend.herokuapp.com/blogs/${id}`,{
           method: 'DELETE' ,
        }).then(()=>{
            //console.log('BLOG DELETED')
        } )
    }

    return(
        <form> 
            <h1>
                Are you Sure you want to delete your masterpiece? 
            </h1>
            <Box m = {1}>
            <Button  onClick={handleClick} variant="contained" color="primary"> Yes Delete! </Button> 
            </Box>

            <Box m = {1}>
            <Link to= {`/login`} style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained" color="primary"> No, I made a mistake! </Button>
            </Link> 
            </Box>

            <Box m = {1}>
            <Link to= {`/login`} style={{ textDecoration: 'none', color: 'white'}}>
            <Button  type = 'submit' variant="contained" color="primary"> Return to Login </Button>
            </Link> 
            </Box>
        </form> 
    )
}


export default DeleteForm; 