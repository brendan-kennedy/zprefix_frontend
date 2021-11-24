import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
    Routes, Route, Link} from "react-router-dom";
import { red } from '@mui/material/colors';


function AccountBlogList() {
    
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [blogs, setBlogs] = useState ([]);
    
    const fetchResults = async () => {
        let url = window.location.href
      let parts = url.split('/')
      let id = parts.pop() || parts.pop()
      console.log(id)
        const data = await fetch(
            `http://localhost:8080/users/${id}/blogs`
        );
    
        const blogs = await data.json();
        console.log(blogs);
        setBlogs(blogs);
    
        };
    
    
    
        return (
            <div>
                <h1> 
                    Here are your blogs:
                </h1> 
                <div> 
            {blogs.map(blog => (
               <Card sx={{ border: 1 }}> 
                <h1>
                    {blog.blog_title}
                </h1>
                <h2> 
                    {blog.blog_date}
                </h2>
                <Link to= {`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'white'}}>
                <Button variant="contained" color="primary">Full Blog</Button>
                </Link>
                <Link to= {`/edit/${blog.id}`} style={{ textDecoration: 'none', color: 'white'}}>
                <Button variant="contained" color="primary">Edit Blog</Button>
                </Link>
                <Link to= {`/delete/${blog.id}`} style={{ textDecoration: 'none', color: 'white'}}>
                <Button variant="contained" color="primary">Delete Blog</Button>
                </Link>
            </Card> 
                //sssss

            ))}
            </div>
        </div>
    
          
        
      );
    }

    export default AccountBlogList;