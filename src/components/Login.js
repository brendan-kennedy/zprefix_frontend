import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function Login() {

    
    
    
    return (
     
    <form>
      <h1>
        Please Login
      </h1> 
      <Box m = {1}>
      <TextField id="standard-basic" label="Username" variant="standard" /> 
      </Box>

      <Box m = {1}>
      <TextField id="standard-basic" label="Password" variant="standard" /> 
      </Box> 

      <Box m = {1}>
      {/*<Link to = "/login" style={{ textDecoration: 'none', color: 'white'}} >*/}
          <Button variant="contained" color="primary">Login!</Button>
      {/*</Link> */}
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