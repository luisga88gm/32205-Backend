const fs = require ('fs')

fs.promises.readFile('package.json', 'utf-8').then((contenido) => {
    console.log(contenido)

    const json = JSON.parse (contenido)
    console.log(json)
})