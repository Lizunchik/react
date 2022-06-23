import './App.css';
import Message from './Message';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Box, TextField } from '@mui/material';
import Chats from './Chats';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<HomePage/>} />
      <Route path={'/chats'} element={<ChatPage/>} />
      <Route path={'/profile'} element={<ProfilePage/>} />

      <Route path={'*'} element={<NotFoundPage/>} />

    </Routes>
    
  );
}

export default App;
