const express = require('express')
const router = require('./routes/route')
const connectDB = require('./config/db')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())


app.use(router)

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})