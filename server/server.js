const express = require('express')
const app = express();
const port = 5000;
//express is a function
//returns app object 


//sets up endpoints.
app.use(express.static('server/public'));

//handle requests
//endpoint = method or url
//setup endpoint
app.get('/browser-input', (request, response) => {
    //send response
    response.send()
});

//listen to port 5000
app.listen(port, () =>{
    console.log('Im listening!');
});