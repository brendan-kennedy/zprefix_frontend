import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
    Routes, Route, Link} from "react-router-dom";


function UsersCards() {
    
    useEffect(() => {
        fetchResults();
    }, []);
    
    const [users, setUsers] = useState ([]);
    
    const fetchResults = async () => {
        const data = await fetch(
            "http://localhost:8080/users"
        );
    
        const users = await data.json();
        console.log(users);
        setUsers(users);
    
        };
    
    
    
        return (
            <div>
            {users.map(user => (
               <Card sx={{ border: 1 }}> 
                <h1>
                    {user.username}
                </h1>
                <Link to= {`/users/${user.id}`} style={{ textDecoration: 'none', color: 'white'}}>
                <Button variant="contained" color="primary">Users Blogs</Button>
                </Link>
            </Card> 
                
            ))}
        </div>

);
}

export default UsersCards;