import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function Login() {

  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');  

    const handleSubmit = (e) => {
      e.preventDefault() 
      const account = {username,password}

      console.log(account)

      fetch('http://localhost:8080/login',{
         method: 'POST' ,
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(account)
      }).then(()=>{
          console.log('login successful!')
      } )

      useEffect(() => {
        fetchResults();
    }, []);
    
    const [user, setUser] = useState ([]);
    
    const fetchResults = async () => {
        const data = await fetch(
            "http://localhost:8080/login/:id"
        );
    
        const user = await data.json();
        console.log(user);
        setBlogs(blogs);
    
        };
  }
    
    return (
     
    <form onSubmit = {handleSubmit}>
      <h1>
        Please Login
      </h1> 
      <Box m = {1}>
      <TextField 
      id="username" 
      label="Username" 
      variant="standard" 
      value= {username}
      onChange = {(e) => setUsername(e.target.value)}
       /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="password" 
      label="Password" 
      variant="standard" 
      value = {password} 
      onChange = {(e) => setPassword(e.target.value)}
      /> 
      </Box> 

      <Box m = {1}>
      <Link to = {`/${blog.id}`} style={{ textDecoration: 'none', color: 'white'}} >
          <Button variant="contained" color="primary">Login!</Button>
      </Link>
      </Box>

      <Box m = {1}>
      <Link to = "/makeaccount" style={{ textDecoration: 'none', color: 'white'}} >
          <Button type = 'submit' variant="contained" color="primary"> Make an Account! </Button>
      </Link>
      </Box>

      <p>{username}</p>
      <p>{password}</p>

    </form> 
  
    );
  }
  
  export default Login;