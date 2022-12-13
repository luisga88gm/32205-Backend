import express from 'express'
import usersRouter from './routers/users.router.js'
import petsRouter from './routers/pets.router.js'

const app = express()

// Cada vez que usamos un "app.use", es un MIDDLEWARE osea, un intermediario.
// Se ejecutan de manera intermedia entre la petición del cliente,
// y el servicio de nuestro servidor.

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// De esta manera, convertimos la carpeta "public" en archivos estáticos de express
app.use('/static', express.static('public'))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/', (req, res) => res.send('HOME'))

app.listen(8080)
