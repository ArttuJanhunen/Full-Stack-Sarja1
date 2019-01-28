import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>
  <button onClick={props.handleClick}>{props.text}</button>



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6).fill(0))
  var suurin = 0
  var indeksi = 0
  for (var i = 0; i < vote.length; i++) {
    if (vote[i] > suurin) {
      suurin = vote[i]
      indeksi = i
    }

  }

  const upvote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)

  }




  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <br />
      <Button handleClick={upvote} text='vote' />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[indeksi]}
      <p>has {vote[indeksi]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)