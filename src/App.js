import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/appbar';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  Routes, Route, Link} from "react-router-dom";
import Users from './components/Users';
import Login from './components/Login';
import Home from './components/Home';
import Blogs from './components/Blogs';
import CompleteBlog from './components/CompleteBlog';
import UsersBlogList from './components/UsersBlogList';
import AccountForm from './components/AccountForm'
import UserAccountPage from './components/UserAccountPage'

function App() {
  return (
   
   <div>
      <header>
        <p>
         <ButtonAppBar/> 
        </p>
        

     
     
      </header>
    

  <Routes> 
  <Route path="/" exact element={<Home/>} />
  <Route path="/users" exact element={<Users/>} />
  <Route path="/blogs" exact element={<Blogs/>} />
  <Route path="/blogs/:id" element={<CompleteBlog/>} />
  <Route path="/login" exact element={<Login/>} />
  <Route path="/users/:id" exact element={<UsersBlogList/>} />
  <Route path="/makeaccount" exact element={<AccountForm/>} />
  <Route path="/:id" exact element={<UserAccountPage/>} />
  </Routes>
  
</div>  

  );
}

export default App;
