import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {Routes, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button'

    

function CompleteBlog() {

    useEffect(() => {
        fetchResults();
    }, []);
    
    const [blog, setBlog] = useState ([]);
    
    const fetchResults = async () => {
        let id = 
        const data = await fetch(
            `http://localhost:8080/blogs/${id}`
        );
    
        const blogs = await data.json();
        console.log(blog);
        setBlog(blog);

    ///sskk
        };
        return ( 
            <div>
                <h1>
                {blog.blog_title}   
                </h1>
                <h3> 
                {blog.blog_date}    
                </h3> 
                <p> 
                 {blog.blog_text}   
                </p>
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="primary">Delete</Button> 
            </div> 

        )

    } 

    export default CompleteBlog;