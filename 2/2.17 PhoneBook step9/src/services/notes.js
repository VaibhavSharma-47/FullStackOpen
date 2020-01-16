import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const temp = axios.get(baseUrl)
    return (temp.then(response => response.data))    
}

const add = (personObject)=>{
    const newObject = personObject
    const request = axios.post(baseUrl, newObject)
    return request.then( response => response.data)
      
}

const remove = (id) =>{
    const temp = axios.delete(`${baseUrl}/${id}`)
    return temp.then(response=>response.data)
}


export default {
    getAll : getAll,
    add : add ,
    remove : remove
}