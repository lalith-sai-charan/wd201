const express = require('express');
const app = express();

app.get('/todos', function (request, response) {
    // response.send('Hello World')
    console.log("Todo List")
  })

  app.post('/todos', function (request, response) {
    // response.send('Hello World')
    console.log("Creating a todo ", request.body)
  })

  app.put('/todos/:id/markAsComplete', function (request, response) {
    // response.send('Hello World')
    console.log("We have to update a todo with id", request.params.id)
  })

  app.delete('/todos/:id', function (request, response) {
    // response.send('Hello World')
    console.log("Delete a todo by id", request.params.id)
  })



app.listen(3000)