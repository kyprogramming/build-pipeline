var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World from Kumar Programming!');
});


var server = app.listen(3000, ()=>{
    var host  = server.address().address;
    var port  = server.address().port;

    console.log(`App is listening http://${host}:${port} `);
})