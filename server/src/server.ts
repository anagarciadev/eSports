//Importing 'express' and declaring a variable 'e'
import express from 'express'

//declaring a variale 'app' and adressing to the function 'e'
const app = express();

//callback function - a function passed into another function as an argument. Arguments are elements that fill parameters
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Ad 1' },
        { id: 2, name: 'Ad 2' },
        { id: 3, name: 'Ad 3' },  
        { id: 4, name: 'Ad 4' },   
        { id: 5, name: 'Ad 5' },   
        
    ])
})


app.listen(3333)
