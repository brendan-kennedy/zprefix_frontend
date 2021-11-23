import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
    Routes, Route, Link} from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brendan's Blog Bazaar
          </Typography>

          <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
          <Button color="inherit">Home</Button>
          </Link>

          <Link to = "/blogs" style={{ textDecoration: 'none', color: 'white'}} >
          <Button color="inherit">Blogs</Button>
          </Link>

          <Link to = "/users" style={{ textDecoration: 'none', color: 'white'}} >
          <Button color="inherit">Users</Button>
          </Link>

          <Link to = "/login" style={{ textDecoration: 'none', color: 'white'}} >
          <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}