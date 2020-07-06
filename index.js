const {database, User} = require('./src/database/connection')

async function connect(){
    try {
        await database.authenticate()
        console.log('Connection has been sabilished')
        await database.close()
        console.log('Connection has been closed')
    } catch (error) {
        console.error(error.stack)
    }
}

//connect()
User.sync({force: true})
.then(console.log('Table created'))
.catch(error => {console.error(error)})