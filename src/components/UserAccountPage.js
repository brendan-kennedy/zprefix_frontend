import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function UserAccountPage() {

  const [username, setUsername] = useState ({username: ''});

  const [blogs, setBlogs] = useState ({blogs: []});
    
    return ( 
        <div> 
            page is in work
        </div>
    );
  }
  
  export default UserAccountPage;