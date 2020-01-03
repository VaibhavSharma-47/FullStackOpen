import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//import Table from './Table'

const Statistics = ({good,neutral,bad}) => {
  if(good===0&&bad===0&&neutral===0){
    
    return(
      <div><br></br>No feedback Given</div>
      ) 
  }
  else{
    return(
      <>
      <h1>statistic</h1>
      <table>
        <tbody>
          <Statistic text='good' value={good}></Statistic>
          <Statistic text='neutral' value={neutral}></Statistic>
          <Statistic text='bad' value={bad}></Statistic>
          <Statistic text='all' value={good + neutral + bad}></Statistic>
          <Statistic text='average' value={(good- bad)/(3*(good + neutral + bad))}></Statistic>
          <Statistic text='positive' value={(good*100)/((good + neutral + bad))}></Statistic>
        </tbody>
      </table>
      </>
    )
  }
}
const Statistic =({text,value})=>{
  return(
    <tr><td>{text}</td><td> {value}</td></tr>
  )
}

const Button = ({text,value,set}) =>{
  return(
        <button onClick={()=>set(value+1)}>
            {text}
        </button>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1> Give Feedback </h1>
        <Button text='Good' value ={good} set={setGood}></Button>
        <Button text='Neutral' value ={neutral} set={setNeutral}></Button>
        <Button text='Bad' value ={bad} set={setBad}></Button>
        <Statistics good = {good} neutral = {neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)