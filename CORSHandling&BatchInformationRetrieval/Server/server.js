//This code is a Node.js application that creates an Express server. It listens on port 5100 and sets up middleware to handle CORS (Cross-Origin Resource Sharing) issues. CORS is a security feature that prevents web pages from making requests to a different domain than the one that served the web page.



const express = require('express');

const app = express();

app.listen(5100,function(req,res)
{
  console.log("Marvellous Server is started Successfully");
});


//Handling cors

app.use((req,res,next)=>
{
  res.header("Access-Control-Allow-Origin","http://localhost:4200");

  res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");

  next();
});

//The server defines two routes, one for the root ('/') and one for '/getBatches'. When a client makes a GET request to the root route, the server responds with a message "Marvellous Server is ON". When a client makes a GET request to the '/getBatches' route, the server responds with a JSON object that contains information about a training batch, including its name and fees.

//This server can be accessed by an Angular application running on 'http://localhost:4200' that needs to fetch data from this server by sending HTTP requests. The CORS middleware added to this code allows the Angular application to access the server's resources.

app.get('/',MarvellousGet);

function MarvellousGet(req,res)
{
res.send("Marvellous Server is ON");
}

app.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
     res.json({"batch":"PPA","Fees":18500});
}