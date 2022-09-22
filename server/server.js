const express = require ('express');
const knex = require('knex')(require('./knexfile')["development"]);
const app = express ();
const port = 5867;
const cors = require ('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req,res) =>{
    res.status(200).send('Welcome to the movie list')
})
app.get('/movie', (req,res) =>{
    knex('movies')
      .select('*')
      .then ((data) =>res.status(200).send(data))
      .catch((err) => 
      res.status(404).json('Could not load page'))
})
app.post('/add_movie', (req,res) =>{
    knex('movies')
      .insert({title: req.body.title})
      .then(data => res.status(201).send('Movie added'))
      .catch(err => res.status(404).send('Could not add movie'))
})
app.delete('/movie/:title', (req, res) => {
    knex('movies')
      .where({ title: req.params.title})
      .delete()
      .then(res.send('movie deleted'))
})
app.get('/movie/:title', (req,res) =>{
    let {title} = req.params
    knex('movies')
    .where('movies.title', 'like' , `%${title}%`)
    .select()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).json('Movie not found, please search for another'))
})
app.patch('/movie/:title', (req,res) =>{
    let {title} = req.params
    knex('movies')
    .where('movies.title', 'like' , `%${title}%`)
    .select('*')
    
})



app.listen(port, console.log(`Express server listening on ${port}`))