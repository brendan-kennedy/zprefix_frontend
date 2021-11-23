import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {Routes, Route, Link} from "react-router-dom";
import Button from '@mui/material/Button'

    

function CompleteBlog() {

    
    
    const [blog, setBlog] = useState ([{blog_title: '', blog_text: '', blog_date: '' }]);

    

    useEffect(() => {
        fetchResults();
    }, []);
    
    const fetchResults = async () => {
        let url = window.location.href
        let urlLength = url.length
        //console.log(urlLength)
        let id = url[urlLength-1]
        //console.log(id)
        const data = await fetch(
            `http://localhost:8080/blogs/${id}`
        );
    
        const blog = await data.json();
        console.log(blog);
        setBlog(blog);


       };
        return ( 
            <div>
                
                <h1>
                {blog[0].blog_title}   
                </h1>
                <h3> 
                {blog[0].blog_date}    
                </h3> 
                <p> 
                {blog[0].blog_text}   
                </p>
                {/*<Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="primary">Delete</Button>*/} 
            
        </div> 

        )

    } 

    export default CompleteBlog;