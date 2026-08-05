const express = require('express')
const router = require('./routes/route')

const app = express()

app.use(router)
app.use(express.json())

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
})