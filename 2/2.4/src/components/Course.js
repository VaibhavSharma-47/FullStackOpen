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
const Foo =({name,id,parts})=>{
    
    return(
        <>
            <Header course={name}></Header>
            <Content parts={parts}></Content>
            <Total parts={parts}></Total>
        </>

    )
}

const Course =({courses})=>{
    //console.log(courses)
    return(
        <>

          {courses.map(Foo)} 
        </>
    )
}

export default Course