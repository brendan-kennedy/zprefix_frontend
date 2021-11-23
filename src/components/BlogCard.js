import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card'


function BlogCard() {
    
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [blogs, setBlogs] = useState ([]);
    
    const fetchResults = async () => {
        const data = await fetch(
            "http://localhost:8080/blogs"
        );
    
        const blogs = await data.json();
        console.log(blogs);
        setBlogs(blogs);
    ///sskk
        };
    
    
    
        return (
            <div>
            {blogs.map(blog => (
               <Card sx={{ border: 1 }}> 
                <h1>
                    {blog.blog_title}
                </h1>
                <p> 
                    {blog.blog_text}
                </p>
                <p> 
                    {blog.blog_date}
                </p>
            </Card> 
                //sssss
            ))}
        </div>
    
          
        
      );
    }
  
  export default BlogCard;