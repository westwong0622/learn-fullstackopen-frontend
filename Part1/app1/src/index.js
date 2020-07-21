import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>Give feedback</h2>
        <div>
          <button onClick={() => setGood(good+1)}>Good</button>
          <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
          <button onClick={() => setBad(bad+1)}>Bad</button>
        </div>
        <h3>Statistics</h3>
        <h3>No feedback given</h3>
      </div>
    )
  } 
    return (
      <div>
        <h2>Give feedback</h2>
        <div>
          <button onClick={() => setGood(good+1)}>Good</button>
          <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
          <button onClick={() => setBad(bad+1)}>Bad</button>
        </div>
        <h3>Statistics</h3>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
  
}

const Statistics = ( {good, neutral, bad} ) => {
  return(
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="average" value={(good+neutral+bad)/3} />
    </div>
  )
}

const Statistic = ( {text, value}) => {
  return (
    <div>{text} {value}</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
