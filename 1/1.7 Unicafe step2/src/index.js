import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1> Give Feedback </h1>
        <button onClick={()=>setGood(good+1)}>
            good
        </button>
        <button onClick={()=>setNeutral(neutral+1)}>
            neutral
        </button>
        <button onClick={()=>setBad(bad+1)}>
            bad
        </button>
        <h1>statistic</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        
        <p>average {(good- bad)/(3*(good + neutral + bad))}</p>
        
        <p>positive {(good*100)/((good + neutral + bad))} %</p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)