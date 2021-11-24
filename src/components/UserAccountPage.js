import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
    Routes, Route, Link} from "react-router-dom";


function UserAccountPage() {
    
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [user, setUser] = useState ({id: '' ,username: ''});
    
    const fetchResults = async () => {
      let url = window.location.href
      let parts = url.split('/')
      let username = parts.pop() || parts.pop()
      console.log(username)
      const data = await fetch(
            `http://localhost:8080/login/${username}`
        );
    
        const user = await data.json();
        console.log(user);
        setUser(user);
    
        };
    
    return ( 
        <div> 
          <h1>
            Welcome to your page {`${user[0].username}`} 
          </h1> 
          
        </div>
    );
  }
  
  export default UserAccountPage;