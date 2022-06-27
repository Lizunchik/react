import './App.css';
import React, { useEffect, useRef, useState } from 'react';

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
