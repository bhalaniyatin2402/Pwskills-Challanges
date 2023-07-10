const monngoose = require('mongoose')

const connectToDB = async () => {
    monngoose.connect(process.env.DB_URL)
        .then(() => console.log('connection successful'))
        .catch(e => console.log('DB conection Err : ', e))
}

connectToDB()
