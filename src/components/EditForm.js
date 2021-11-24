import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function EditForm() {

    return(
        <h1>
            in work 
        </h1> 
    )
}
   {/* useEffect(() => {
        fetchResults();
    }, []);
    
    const [blog, setBlog] = useState ([{blog_title: '', blog_text:'', blog_date: '', blog_user_id:''}]);
    
    const fetchResults = async () => {
      let url = window.location.href
      let parts = url.split('/')
      console.log(parts)
      let id = parts.pop() || parts.pop()
      console.log(id)
      const data = await fetch(
            `http://localhost:8080/blogs/${id}`
        );
    
        const blog = await data.json();
        console.log(blog);
        setBlog(blog);
    
        };

    const handleSubmit = (e) => {
        e.preventDefault() 
        const blog = {blog_title,blog_text,blog_date,blog_user_id}

        console.log(blog)

        fetch('http://localhost:8080/blogs/:id/edit',{
           method: 'PATCH' ,
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog edited')
        } )
    }
    
    return (
     
    {<form onSubmit={handleSubmit}>
      <h1>
        Edit your existing blog: 
      </h1> 
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Title" 
      variant="standard"
      value = {blog_title}
      onChange = {(e) => setUsername(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Text" 
      variant="standard"
      value = {blog_text}
      onChange = {(e) => setPassword(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Date" 
      variant="standard"
      value = {blog_date}
      onChange = {(e) => setPassword(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="User ID" 
      variant="standard"
      value = {blog_user_id}
      onChange = {(e) => setPassword(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
          <Button  type = 'submit' variant="contained" color="primary"> Create Account! </Button>
      </Box>
    </form> 
  
    ); */}
  
  
  export default EditForm;