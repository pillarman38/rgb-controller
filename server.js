const express = require('express')
const app = express()
const appTwo = express()
const port = 4012
var cors = require('cors')
var bparser = require('body-parser').json()

app.use(bparser)
app.use(express.static(__dirname + '/dist'))

app.use(cors())

let userRoutes = require('./server/routes/routes')

app.use('/api/rgb', userRoutes)

app.get('*', (req, res) => {
    res.sendFile('/dist/index.html', {root: __dirname})
})

var server = app.listen(port, function() {
    var host = 'localhost';
    var thisport = server.address().port;
    console.log(`Example app on port ${port}!`);
});
