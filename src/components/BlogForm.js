import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function AccountForm() {

    let url = window.location.href
      let parts = url.split('/')
      let id = parts.pop() || parts.pop()
    
    const [blog_title, setTitle] = useState ('');
    const [blog_text, setText] = useState ('');
    const [blog_date,setDate] = useState ('') ;
    const [blog_user_id,setId] = useState ('') ;
    
    
    useEffect(() => {
        fetchResults();
    }, []);

    const [user, setUser] = useState([{id: '' ,username: ''}]);

    const fetchResults = async () => {
      let url = window.location.href
      let parts = url.split('/')
      let id = parts.pop() || parts.pop()
      console.log(id)
      const data = await fetch(
            `http://localhost:8080/login/${id}`
        );
    
        const user = await data.json();
        console.log(user);
        setUser(user);
    
        };
    

    const handleSubmit = (e) => {
        e.preventDefault() 
        const blog = {blog_title,blog_text,blog_date, blog_user_id}

        console.log(blog)

        fetch('http://localhost:8080/blogs/new',{
           method: 'POST' ,
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog created')
        } )
    }
    
    return (
     
    <form onSubmit={handleSubmit}>
      <h1>
        Create a Blog Post: 
      </h1> 

      <h2> 
        Your user ID is: {`${id}`}
      </h2>
     
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Title" 
      variant="standard"
      value = {blog_title}
      onChange = {(e) => setTitle(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Text" 
      variant="standard"
      value = {blog_text}
      onChange = {(e) => setText(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="date" 
      variant="standard"
      value = {blog_date}
      onChange = {(e) => setDate(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="User ID" 
      variant="standard"
      value = {blog_user_id}
      onChange = {(e) => setId(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
           
          <Button  type = 'submit' variant="contained" color="primary"> Create Blog! </Button>
          
      </Box>
    </form> 
  
    );
  }
  
  export default AccountForm;