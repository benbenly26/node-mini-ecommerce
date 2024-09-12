const mongoose = require('mongoose')

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB connected to Host mmbu: ' + con.connection.host)
    })
}

module.exports = connectDataBase