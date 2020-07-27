import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVoteOne, setMostVoteOne] = useState(0)
  const [mostVoteOneIndex, setMostVoteOneIndex] = useState(0)

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0
  })

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random()*3))
  }

  const upvote = () => {
    const copy = { ...points }
    copy[selected] += 1
    console.log(copy[selected])
    if(copy[selected] > mostVoteOne) {
      setMostVoteOne(copy[selected])
      setMostVoteOneIndex(selected)
    }
    console.log(copy)
    setPoints(copy)
  }

  return (
    <div>
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}
        <br />
        <button onClick={randomAnecdote}>Random</button>
        <button onClick={upvote}>Upvote</button>
      </div>
      <div>
        <h3>Anecdote with the most votes</h3>
        {props.anecdotes[mostVoteOneIndex]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time.',
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);
