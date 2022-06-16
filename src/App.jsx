import logo from './logo.svg';
import './App.css';
import Message from './Message';
import React, { useEffect, useState } from 'react';


function App() {
  const name = 'lizon';
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setTimeout(() => {
      botAnswer(messageList);
    }, 1000);
  }, [messageList]);


  const handleSubmit = (event) => {
    event.preventDefault();

    setMessageList(prevState => [...prevState,
    {
      id: getId(prevState),
      author: author,
      text: text
    }]);
  }

  function getId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }
  function botAnswer() {
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage && lastMessage.author) {
      setMessageList(prevState => [...prevState, {
        id: getId(prevState),
        text: `сообщение автора ${lastMessage.author} отправлено`
      }]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={name} />
        <div>
          <form onSubmit={handleSubmit}>
            <label>Текст</label>
            <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
            <br />
            <label>Автор</label>
            <input type="text" value={author} onChange={({ target }) => setAuthor(target.value)} />
            <br />
            <button type='submit'>Добавить сообщение</button>
          </form>
          {messageList.map(item => {
            return (
              <div key={item.id}>
                {item.author && <p>Автор: {item.author}</p>}
                <p>{item.author && <span>Текст:</span>} {item.text}</p>
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
