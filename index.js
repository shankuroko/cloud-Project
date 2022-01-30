const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var food = [{
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}];
var drinks = [{
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}, {
    name: "",
    price: 0,
    img: "",
    qty: 1
}];
var cart = {
    data: []
};
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    let out = '';
    if (req.query.item == 'food') {
        for (let i = 0; i < food.length; i++) {
            out += `<div class="menu-item"><div class="menu-item_container">`;
            out += `<i>${food[i].name}</i>`;
            out += `<i>${food[i].price}</i>`;
            out += `<div class="menu-item-btn" onclick="addToCart(${JSON.stringify(food[i])})">Add Item</div></div></div>`;
        }
    } else if (req.query.item == 'drinks') {
        for (let i = 0; i < drinks.length; i++) {
            out += `<div class="menu-item"><div class="menu-item_container">`;
            out += `<i>${drinks[i].name}</i>`;
            out += `<i>${drinks[i].price}</i>`;
            out += `<div class="menu-item-btn" onclick="addToCart(${JSON.stringify(drinks[i])})">Add Item</div></div></div>`;
        }
    }
    res.end(out);
});
app.get('/food', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    let out = '';
    for (let i = 0; i < food.length; i++) {
        out += `<div class="menu-item"><div class="menu-item_container">`;
        out += `<i>${food[i].name}</i>`;
        out += `<i>${food[i].price}</i>`;
        out += `<div class="menu-item-btn" onclick="addToCart(${JSON.stringify(food[i])})">Add Item</div></div></div>`;
    }
    res.end(out);

});

app.get('/drink', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    let out = '';
    for (let i = 0; i < drinks.length; i++) {
        out += `<div class="menu-item"><div class="menu-item_container">`;
        out += `<i>${drinks[i].name}</i>`;
        out += `<i>${drinks[i].price}</i>`;
        out += `<div class="menu-item-btn" onclick="addToCart(${JSON.stringify(drinks[i])})">Add Item</div></div></div>`;
    }
    res.end(out);
});
app.post('/add', (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    res.end(`<script>console.log(${req.body.a})</script>`);
});
app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});