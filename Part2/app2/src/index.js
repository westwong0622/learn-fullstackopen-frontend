import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const notes = [
  {
    id: 1,
    content: "hello",
    important: false
  },
  {
    id: 2,
    content: "world",
    important: false
  }

]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);
