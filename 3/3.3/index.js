const express = require('express')
app = express()

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
]
app.get('/api/persons',(req,res)=>
    res.json(notes)
)
app.get('/api/persons/:id',(req,res)=>{
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
}

)

app.get('/info',(req,res)=>{
    var currentdate = new Date(); 
    var datetime = "Fetched at: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    x = `PhoneBook has info for ${notes.length} people \n${datetime}`
    res.send(x)
})


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)