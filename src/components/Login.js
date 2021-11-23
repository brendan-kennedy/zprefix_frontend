import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

function Blogs() {

    
    
    
    return (
     
    <form>
      <h1>
        Please Login
      </h1> 
      <Box m = {1}>
      <TextField id="standard-basic" label="Username" variant="standard" /> 
      </Box>

      <Box m = {1}>
      <TextField id="standard-basic" label="Standard" variant="standard" /> 
      </Box> 
    </form> 
  
    );
  }
  
  export default Blogs;