import React, { useState, useEffect } from 'react';
import axios from 'axios'
console.log(process.env.REACT_APP_API_KEY)
const Weather = ({weather})=>{
  console.log(weather.current.temperature)
    return(
      <>
      <h1>Weather</h1>
      <b>temp : current  {weather.current.temperature} Celcius</b>
      <br></br>
      <b>wind: {`${weather.current.wind_speed} kmph ${weather.current.wind_dir}`} </b>
      </>
    )
}
const DisplayResult=({countryToShow})=>{
  //console.log("Display Result",countryToShow)
  const [weather,setWeather] = useState(0)
  countryToShow = countryToShow[0]
  useEffect(()=>{
    axios.get('http://api.weatherstack.com/current?access_key=afcc1479532245005f9de5181a28d7fe&query='+countryToShow.capital)
      .then(response=>{
        console.log("Weather fetched")
        setWeather(response.data)
        console.log(response.data)
      })
  },[])
  
  const rows = ()=>{
    const ret = countryToShow.languages.map((lang)=><li key={lang.name}>{lang.name}</li>)
    //console.log(ret)
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
    {weather!==0?<Weather weather={weather}/>:<></>}
    </>
  )
}
const DisplayRows = ({countryToShow})=>{
  const [show,setShow] = useState(0)
  const handleClick = (c)=>()=> {
    countryToShow=[].concat(c)
    setShow(1)
    //console.log(countryToShow)
  }
    return(
    show!==0?<DisplayResult countryToShow={countryToShow}/>:countryToShow.map((c)=><li key={c.name}>{c.name}<button onClick={handleClick(c)}>Show</button></li>)
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
    //console.log(event.target.value)
    setFilter(event.target.value)
  }
  return(
    <>
    enter country
    <input 
    value={filter}
    onChange={handleFilterChange}/>
    <br/>
    {countryToShow.length!==1?<DisplayRows countryToShow={countryToShow}/>:<DisplayResult countryToShow={countryToShow}/>}
    </>
  )
}

export default App;
