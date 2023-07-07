const mongoose = require('mongoose')

const dbConn =  () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('connection successful'))
        .catch((e) => console.log('DB conn err : ', e))
}

dbConn()