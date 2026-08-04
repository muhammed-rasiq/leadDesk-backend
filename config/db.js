const mongoose = require('mongoose')

const connectionString = process.env.connectionString

const connectDB = mongoose.connect(connectionString).then(()=>{
    console.log('database connected')
}).catch(()=>{
    console.log('database connecting error')
})