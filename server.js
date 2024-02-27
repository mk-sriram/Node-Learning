const { Server } = require('http');
const express = require('express')

const app = express(); 


const path = require('path')
const PORT = process.env.PORT || 3500; 

//middle ware

app.use(express.urlencoded({extended:false}));  //form data 

app.use(express.json()); //json data middle ware 

app.use(express.static(path.join(__dirname, '/public'))); //servers static filies , middle ware 



app.get( '/|/index(.html)?', (req,res) => {  //(.html)?  => makes the .html optional for the route 
    //req is what gets send to this route  
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
    //res is what gets sent back 

}
) 

//reads it down like waterfall , sequentially 

app.get( '/new-page.html', (req,res) => { 
    //req is what gets send to this route  
    res.sendFile(path.join(__dirname, 'views', 'new-page.html')); 
    //res is what gets sent back 
}
)

app.get( '/old-page(.html)?', (req,res) => { 
    //req is what gets send to this route  
    res.redirect(301, '/new-page.html') //302 by default, but 301 will not get the serach enginer to consider it as a permanent redirect 
    //res is what gets sent back 
}
)

app.get('/*', (req, res) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
}); 


app.listen(PORT, () => console.log("server running on port 3500"))