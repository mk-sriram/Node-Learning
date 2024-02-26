
// const os = require('os'); 
// const path = require('path')

// const { add, subtract, multiply, divide} = require('./math') // a module math.js with export.add(a,b) => {return a+b;}
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))

// console.log(path.parse(__filename)) // parses the entire path into an object ( probably the most useful )


// READING AND WRITING FILES
// const fs = require('fs')

// fs.readFile('./files/starter.txt')


const { format } = require('date-fns'); 
const { v4: uuid} = require('uuid');  //v4 as uuid ( uuid(function parameter))

const fs = require('fs'); 
const path = require('path'); 
const fsPromises = require('fs').promises; 

const logEvents = async ( message ) => { 
    const datatime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}` ;
    const logItem = `${datatime}\t${uuid()}\t${message}` ; 
    console.log(logItem); 

    try { 

    } catch ( err ) { 
        console.err(err); 
    }
}
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

