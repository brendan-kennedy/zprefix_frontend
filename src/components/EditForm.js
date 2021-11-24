import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function EditForm() {

      
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [title, setTitle] = useState (title)
    const [text, setText] = useState(text)
    const [date, setDate] = useState(date)
    const [blog_id, setId]= useState('')
    
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
        const title = blog.blog_title
        const text = blog.blog_text
        const date = blog.blog_date
        const blog_id = blog.blog_user_id
        console.log(blog)
        setTitle(title);
        setText(text);
        setDate(date);
        setId(id);
    
        };

    const handleSubmit = (e) => {
        e.preventDefault() 
        const blog = {title,text,date,blog_id}

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
     
    <form onSubmit={handleSubmit}>
      <h1>
        Edit your existing blog: 
      </h1> 
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Title" 
      variant="standard"
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Text" 
      variant="standard"
      value = {text}
      onChange = {(e) => setText(e.target.value)}
    /> 
      </Box> 

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Date" 
      variant="standard"
      value = {date}
      onChange = {(e) => setDate(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="User ID" 
      variant="standard"
      value = {blog_id}
      onChange = {(e) => setId(e.target.value)}
    /> 
      </Box>

      <Box m = {1}>
          <Button  type = 'submit' variant="contained" color="primary"> Edit! </Button>
      </Box>
    </form> 
  
    );
    }
  
  export default EditForm;