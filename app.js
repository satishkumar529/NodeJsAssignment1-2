const fs = require('fs');



const express = require('express')

const app = express();
const port = 6500;

app.get('/', (req,res) =>{
    res.send('<h1> Welcome to expresss server</h1>');
})

app.get('/getMovies', (req,res) =>{
    fs.readFile('db.json', function(err,result){
        if(err)
        {
            throw err;
        }
        else{
            res.send(JSON.parse(result))
        }
    })
})
app.listen(port,(err) =>{
    console.log("server is running on port" + port);
})