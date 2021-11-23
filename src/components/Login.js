import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function Login() {

  const [state, setState] = useState ({
    username: '', 
    password: ''
  });

  const handleChange = e => {
    const {id,value} =e.target
    setState(prevState => ({
       ...prevState, [id] : value}))
  };
    
    
    return (
     
    <form>
      <h1>
        Please Login
      </h1> 
      <Box m = {1}>
      <TextField 
      id="username" 
      label="Username" 
      variant="standard" 
      value= {state.username}
      onChage = {handleChange}
       /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="password" 
      label="Password" 
      variant="standard" 
      value = {state.password} 
      onChage = {handleChange}
      /> 
      </Box> 

      <Box m = {1}>
      <Link to = "/:id" style={{ textDecoration: 'none', color: 'white'}} >
          <Button variant="contained" color="primary">Login!</Button>
      </Link>
      </Box>

      <Box m = {1}>
      <Link to = "/makeaccount" style={{ textDecoration: 'none', color: 'white'}} >
          <Button variant="contained" color="primary"> Make an Account! </Button>
      </Link>
      </Box>
    </form> 
  
    );
  }
  
  export default Login;