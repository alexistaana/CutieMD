var PORT = process.env.PORT || 8080;

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(PORT, function(){
    console.log('server started @ port 8080');
})