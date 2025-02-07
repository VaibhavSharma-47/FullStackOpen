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
            <Part1 part1 = {props.part1} exercises1 = {props.exercises1}/>
            <Part2 part2 = {props.part2} exercises2 = {props.exercises2}/>
            <Part3 part3 = {props.part3} exercises3 = {props.exercises3}/>
        </>
    )
}
const Total = (props) => {
    return(
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <Header course = {course}/>
        <Content part1= {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))