import express from 'express'

const app = express ()
const server = app.listen(8080, () => console.log("Server Running..."))



// COMO CREAR UN METODO "GET" Y VERLO FUNCIONAR EN EL NAVEGADOR Y EN POSTMAN

let users = []

app.use(express.json())  // PARA OBTENER JSON DEL BODY
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('OK'))

app.get('/api/user', (req, res) => res.send(users))

// COMO CREAR UN METODO "POST" Y VERLO FUNCIONAR EN POSTMAN

app.post('/api/user', (req, res) => {
    const user = req.body

    if(!user.firstname) {
        return res.status(400).send({status: "error", error: "Valores Incompletos"})
    }
    users.push(user)

    res.send({status: "success", message: "User created"})
})

// COMO ACTUALIZAR EL USUARIO CON "PUT" Y VERLO FUNCIONAR EN POSTMAN

app.put('/api/user', (req, res) => {
    const user = req.body
    
// VALIDAMOS QUE VENGA EL PRIMER NOMBRE

    if(!user.firstname) {
        return res.status(400).send({status: "error", error: "Valores Incompletos"})
    }


// BUSCAMOS EL USUARIO Y OBTENEMOS EL INDEX
    const idx = users.findIndex(u => u.firstname == user.firstname)

// VALIDAMOS QUE ENCONTRÓ EL USUARIO
    if (idx < 0) {
        return res.status(404).send({status: "error", error: "User Not Found"})
    }

// ACTUALIZAMOS EL USUARIO
    users[idx] = user

// DEVOLVEMOS LA RESPUESTA
    res.send({status: "success", message: "User Updated"})
})

app.delete('/api/user/:name', (req, res) => {
    const name = req.params.name

// TAMAÑO ANTES DE FILTRAR
    const actualTotal = users.length

// AQUÍ FILTRAMOS...
    users = users.filter(u => u.firstname != name)

// VALIDAMOS SI ENCONTRÓ UN USUARIO CON EL NOMBRE
    if(users.length == actualTotal) {
        return res.status(404).send({status: "error", error: "User Not Found"})
    }

    res.send({status: "success", message: "User Deleted"})
})