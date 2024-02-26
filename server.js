const express = require("express") //import express as module 

const app = express() // calling expres as a function, creates an application for express 

//local hosting at port 3000 , here we are hosting it on this 
app.set('view engine','ejs')
//express is basicaly just having bunch of ports for the GET, POST, requests 

app.get('/', (req,res) => {
    //any time we are accessing the local3000 URL, would be a different URL if you're hosted
    res.render('index')
    //res.status(500).send("THE ERROR")
})

app.listen(3000) 