import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
    ]
  
    return (
        <div>
            <Course course= {course} parts = {parts}></Course>
        </div>

        )
  }

ReactDOM.render(<App />, document.getElementById('root'))