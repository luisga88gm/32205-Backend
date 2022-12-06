const express = require('express')

const app = express()

// como crear un servidor con express
app.get('/saludo', (request, response) => {
    response.send('endpoint saludo')
})


const html = "<h1 style='color:blue;'>Bienvenida </h1>"

const objeto = {
    name: 'Luis',
    lastName: 'García',
    age: 34
}

app.get('/bienvenida', (req, res) => {
    res.send(html)
})

app.get('/usuario', (req, res) => {
    res.send(objeto)
})

app.listen(8080, () => {
    console.log('Escuchando el puerto 8080');
})

// ===> http://127.0.0.1:8080/saludo