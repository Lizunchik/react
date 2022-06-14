import logo from './logo.svg';
import './App.css';
import Message from './Message';
import React, { useState } from 'react';


function App() {
  const name = 'lizon';
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={name} />
        <div>
          <input type="text" />
          {messageList.map(item => {
            return (
              <div key={item.id}>
                {item.text}
              </div>
            )
          })}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header >
    </div >
  );
}

export default App;
