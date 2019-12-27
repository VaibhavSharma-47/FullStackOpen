import React from 'react'
import ReactDOM from 'react-dom'
const Part1 = (props) =>{
    return(
        <p>
            {props.part1} {props.exercises1}
        </p>
    )
}
const Part2 = (props) =>{
    return(
        <p>
            {props.part2} {props.exercises2}
        </p>
    )
}
const Part3 = (props) =>{
    return(
        <p>
            {props.part3} {props.exercises3}
        </p>
    )
}
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Content = (props) =>{
    return (
        <>
            <Part1 part1 = {props.parts[0].name} exercises1 = {props.parts[0].exercises}/>
            <Part2 part2 = {props.parts[1].name} exercises2 = {props.parts[1].exercises}/>
            <Part3 part3 = {props.parts[2].name} exercises3 = {props.parts[2].exercises}/>
        </>
    )
}
const Total = (props) => {
    return(
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    
    )
}
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
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>

        )
  }

ReactDOM.render(<App />, document.getElementById('root'))