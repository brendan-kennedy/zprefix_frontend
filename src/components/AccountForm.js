import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function AccountForm() {

    
    
    
    return (
     
    <form>
      <h1>
        Create a New Brendan's Blog Bazaar Account: 
      </h1> 
      <Box m = {1}>
      <TextField id="standard-basic" label="Username" variant="standard" /> 
      </Box>

      <Box m = {1}>
      <TextField id="standard-basic" label="Password" variant="standard" /> 
      </Box> 

      <Box m = {1}>
      <Link to = "/login" style={{ textDecoration: 'none', color: 'white'}} >
          <Button variant="contained" color="primary"> Create Account! </Button>
      </Link>
      </Box>
    </form> 
  
    );
  }
  
  export default AccountForm;