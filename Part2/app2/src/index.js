import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const notes = [
  {
    id: 1,
    name: "hello"
  },
  {
    id: 2,
    name: "world"
  }

]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);
