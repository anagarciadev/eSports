//Importing 'express' and declaring a variable 'e'
import express from 'express'
import {PrismaClient} from '@prisma/client'

//declaring a variale 'app' and adressing to the function 'e'
const app = express();

const prisma = new PrismaClient({
    log: ['query']
    
});

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany()

    return response.json(games)
})

app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

//callback function - a function passed into another function as an argument. Arguments are elements that fill parameters
app.get('/games/:id/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Ad 1' },
        { id: 2, name: 'Ad 2' },
        { id: 3, name: 'Ad 3' },  
        { id: 4, name: 'Ad 4' },   
        { id: 5, name: 'Ad 5' },   
        
    ])
})

//callback function - a function passed into another function as an argument. Arguments are elements that fill parameters
app.get('/ads/:id/discord', (request, response) => {
    return response.json([])
})


app.listen(3333)
