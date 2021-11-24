import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {
  Routes, Route, Link} from "react-router-dom";
  import Button from '@mui/material/Button';

function EditForm() {
  let url = window.location.href
  let parts = url.split('/')
  const id = parts.pop() || parts.pop()
  const [blog_title,setTitle] = useState('')
  const [blog_text,setText] = useState('')
  const [blog_date,setDate] = useState('')
  const [blog_user_id,setId] = useState('')
  const [edit, setEdit] = useState('You Have Not Edited Your Blog')

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [originalblog,setBlog] = useState([{blog_title:'',blog_text:'',blog_date:'',blog_user_id:''}])
    
    const fetchResults = async () => {
      
      const data = await fetch(
            `http://localhost:8080/blogs/${id}`
        );
    
        const originalblog = await data.json();
        console.log(originalblog)
        setBlog(originalblog);
    
        };

    const handleSubmit = (e) => {
      e.preventDefault() 

        const blog = {blog_title,blog_text,blog_date,blog_user_id}

        console.log(blog)

        fetch(`http://localhost:8080/blogs/${id}`,{
           method: 'PATCH' ,
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog edited')
        } )
    }

    const handleClick = () => { 
     const edit = 'You Edited Your Blog!'
     setEdit(edit)
  }
    
    return (
     
    <form onSubmit={handleSubmit}>
      <h1>
        Edit your existing blog: 
      </h1> 

      <p>
        Current Title: {originalblog[0].blog_title}
      </p> 
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Title" 
      variant="standard"
      value = {blog_title}
      onChange = {(e) => setTitle(e.target.value)}
    /> 
      </Box>

      <p>
        Current Text: {originalblog[0].blog_text}
      </p>
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Text" 
      variant="standard"
      size = 'large'
      value = {blog_text}
      onChange = {(e) => setText(e.target.value)}
    /> 
      </Box> 

      <p>
        Current Date: {originalblog[0].blog_date}
      </p>
      <Box m = {1}>
      <TextField 
      id="standard-basic" 
      label="Date" 
      variant="standard"
      value = {blog_date}
      onChange = {(e) => setDate(e.target.value)}
    /> 
      </Box>

      <p>
        User ID: {originalblog[0].blog_user_id}
      </p>
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
          <Button onClick = {handleClick} type = 'submit' variant="contained" color="primary"> Edit! </Button>
      </Box>
      
      <Box m = {1}>
      <Link to= {`/blogs/${id}`} style={{ textDecoration: 'none', color: 'white'}}>
          <Button variant="contained" color="primary"> Check out this new blog! </Button>
      </Link>
      </Box>
    <p>
      {edit}
    </p>
    </form> 
  
    );
    }
  
  export default EditForm;