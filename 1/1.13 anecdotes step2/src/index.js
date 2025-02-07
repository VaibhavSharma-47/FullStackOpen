import React, { useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0}
  )
  const Votes=()=>{
    const newvotes={
      ...votes
    }
    newvotes[selected]+=1
    setVotes(newvotes)
    console.log(newvotes)
  }
  return (
    
    <div>
      <h1>Anecdotes of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>

      <button onClick={()=>{setSelected (Math.floor(Math.random()*(anecdotes.length)))}}>next anecdotes</button>
      <button onClick={()=>Votes()}>Vote</button>
      <h1>Anecdotes with most votes</h1>
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