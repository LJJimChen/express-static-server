const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('public'));
app.get('*', function (req, res) {
    res.type('html');
    let index = require('path').resolve("./public/index.html");
    console.log(index);

    res.sendFile(index);
});
var port = 8088;
var host = "127.0.0.1"
app.listen(port, host, (args) => console.log(`Example app listening on  ${host}:${port}!`))
