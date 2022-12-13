import express from 'express'

const app = express ()
const server = app.listen(8080, () => console.log("Server Running..."))

app.use(express.json())  // PARA OBTENER JSON DEL BODY
app.use(express.urlencoded({extended: true}))

let frase = 'Hola a todo el mundo, como andan? Van a comer'

app.get ('/api/frase', (req, res) => {
    // devolver un objeto que tenga un campo "frase"
    res.send({frase})
})

app.get ('/api/frase/:pos', (req, res) => {
    const pos = req.params.pos
    
    const palabra = frase.split(' ')[pos-1]

    res.send({palabra})
})

app.post('/api/palabras/', (req, res) => {
    const palabra = req.body.palabra

    frase = frase +' '+ palabra
    const pos = frase.split('').length
    
    res.send({palabra: palabra, pos: pos})
})