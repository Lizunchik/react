import './App.css';
import Message from './Message';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { Box, TextField } from '@mui/material';
import Chats from './Chats';


function App() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatList] = useState([
    { name: "vasya", id: 1 },
    { name: "vova", id: 2 },
    { name: "pasha", id: 3 },
  ]);
  const inputRef = useRef(null);


  const onButtonClick = () => {
    let newId = 1;
    if (messages.length) {
      newId = messages[messages.length - 1].id + 1;
    }
    if (author.length) {
      setMessages(messages => [...messages, { text: message, author: author, id: newId }])
    }
    else {
      alert('author name needed');
    }
  };

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.author) {
      setTimeout(() => {
        alert(`${author}, message sent`)
      }, 1500);
    }
    focusTextField(inputRef.current);
  }, [messages])




  return (
    <div className="App">
      <header className="App-header">

        <div>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            {chatList.map(item => {
              return (
                <Chats name={item.name} key={item.id} />
              )
            })}
          </List>
          <Box
            component="form"
            noValidate
            autoComplete='off'
          >
            <TextField id="outlined-required" required
              fullWidth
              label="Author Name"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
            <TextField id="filled-basic"
              label="Message text"
              multiline
              value={message}
              inputRef={inputRef}
              onChange={({ target }) => setMessage(target.value)}
            />
            <Button fullWidth onClick={onButtonClick}>Send</Button>
          </Box>
        </div>
        {messages.map(e => {
          return (
            <Message author={e.author} text={e.text} key={e.id} />
          )
        })}

      </header >
    </div >
  );
}

export default App;
