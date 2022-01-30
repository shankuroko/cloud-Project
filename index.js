const express = require('express'); //Import the express dependency
const app = express();  
var cors = require('cors');
          //Instantiate an express app, the main work horse of this server
const port = process.env.PORT||5000;                  //Save the port number where your server will be listening
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    //res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
   // console.log(req.params);

   res.setHeader('Content-Type', 'text/html');
   res.type('html'); 
   res.end(`<script>console.log(${req.query.a})</script>`);
    //res.write(`hello ${req.params['a']}`);                                                //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.post('/',(req, res) => {        //get requests to the root ("/") will route here
    //res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
   // console.log(req.params);

   res.setHeader('Content-Type', 'text/html');
   res.type('html'); 
   res.end(`<script>console.log(${req.body.a})</script>`);
});
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});