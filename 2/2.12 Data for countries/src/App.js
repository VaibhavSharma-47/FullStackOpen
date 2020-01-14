import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DisplayResult=({countryToShow})=>{
  countryToShow = countryToShow[0]
  console.log(countryToShow)
  const rows = ()=>{
  const ret = countryToShow.languages.map((lang)=><li key={lang.name}>{lang.name}</li>)
    console.log(ret)
    return(ret)
  }
    return(
    <>
      <h1>{countryToShow.name}</h1>
      <p>capital : {countryToShow.capital}</p>
      <p>population : {countryToShow.population}</p>
      <h2>Languages</h2>
      <ul>
        {rows()}
      </ul>
      <img src={countryToShow.flag} alt={`Flag of ${countryToShow.flag}`}></img>
    </>
  )
}
const App = ()=> {
  const [filter,setFilter] = useState([])
  const [country,setCountry] = useState([])
  const countryToShow = filter===''?[]:country.filter(c=>c.name.includes(filter))
  useEffect(()=>{
    console.log('effec')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response=>{
        console.log('promise fullfiled')
        setCountry(response.data)
      })
  },[])



  const handleFilterChange = (event)=>{
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  return(
    <>
    enter country
    <input 
    value={filter}
    onChange={handleFilterChange}/>
    <br/>
    {countryToShow.length!==1?<></>:<DisplayResult countryToShow={countryToShow}/>}
    </>
  )
}

export default App;
