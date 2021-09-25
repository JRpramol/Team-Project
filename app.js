// importing express
const express = require('express')

// creating a instance of express
const app = express();

// serving data
app.get('/api/', (req, res) => {
    res.json({hello: "Hello World"})
})

app.listen(5000, console.log('App Running On Port 5000!'))
