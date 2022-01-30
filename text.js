const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    let p = document.createElement('p');
    p.innerText = "Hello";
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    res.end(p);
});
app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});