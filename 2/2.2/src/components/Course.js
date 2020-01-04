import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Content = ({parts}) =>{
    return (
        <>
            <ul>
                {parts.map((parts)=><li key={parts.name}>{parts.name +" " + parts.exercises} </li>)}
            </ul>
        </>
    )
}
const Total =({parts}) =>{
    return(
        <>
            Total is {parts.reduce((sum,parts)=>sum+parts.exercises,0)}
        </>
    )
}

const Course =({course,parts})=>{
    //console.log("Here")
    return(
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </>
    )
}

export default Course