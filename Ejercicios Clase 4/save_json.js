const fs = require('fs')

const DB = {
    name: "Luis",
    lastname: "García",
    age: 34
}

jsonStr = JSON.stringify(DB)
fs.promises.writeFile('DB.json', jsonStr)
    .then(() => {
        console.log('DB saved!');
    })
    .catch(e => {
        console.error('ERROR', e);
    })