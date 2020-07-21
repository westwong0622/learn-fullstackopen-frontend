import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <div>
        <button onClick={() => setGood(good+1)}>Good</button>
        <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
        <button onClick={() => setBad(bad+1)}>Bad</button>
      </div>
      <h3>Statistics</h3>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>average {(good+neutral+bad)/3}</div>
      <div>positive {good/(good+neutral+bad)}</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
