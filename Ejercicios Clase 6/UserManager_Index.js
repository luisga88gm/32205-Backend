const UserManager = require('./usermanager')

const run = async() => {
    const manager = new UserManager()
    await manager.createUser({
        nombre: 'Luis',
        lastname: 'García',
        username: 'luisga',
        password: 'zocca'
    })

    await manager.createUser({
        nombre: 'Carlos',
        lastname: 'Rodríguez',
        username: 'charly',
        password: 'yendocamaliving'
    })

    console.log(await manager.getUsers());

    await manager.validateUser('charly', 'yendocamaliving')
}


run()