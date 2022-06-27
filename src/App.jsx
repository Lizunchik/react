import './App.css';
import Message from './Message';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Box, TextField } from '@mui/material';
import Chats from './Chats';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: 'plus' })}>+</button>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>


  );
}

export default App;
