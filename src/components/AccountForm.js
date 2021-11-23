import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function AccountForm() {

    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');   

    const handleSubmit = (e) => {
        e.preventDefault() 
        const account = {username,password}

        console.log(account)

        fetch('http://localhost:8080/make',{
           method: 'POST' ,
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(account)
        }).then(()=>{
            console.log('new user created')
        } )
    }
    
    return (
     
    <form onSubmit={handleSubmit}>
      <h1>
        Create a New Brendan's Blog Bazaar Account: 
      </h1> 
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Username" 
      variant="standard"
      value = {username}
      onChange = {(e) => setUsername(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Password" 
      variant="standard"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
          <Button  type = 'submit' variant="contained" color="primary"> Create Account! </Button>
      </Box>
    </form> 
  
    );
  }
  
  export default AccountForm;