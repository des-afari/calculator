const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

//middleware
app.use(express.static(path.join(__dirname + 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, console.log(`Listening at http://localhost:${PORT}`))