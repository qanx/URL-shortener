// import mongoose package
const mongoose = require('mongoose')


// declare a Database string URI
const databaseLink = process.env.DB_URI

// establishing a database connection
mongoose.connect(databaseLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

// export the connection object
module.exports = connection