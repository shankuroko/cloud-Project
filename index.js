const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var food = [{
    name: "Popeyes Chicken Sandwich",
    price: 100,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/popeyes-fried-chicken-sandwich.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Chick-fil-A Waffle Fries",
    price: 70,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/chick-fil-a-fries-drink.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Papa John's Pepperoni Pizza",
    price: 400,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/papa-john-pepperoni-pizza.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Subway sandwitch",
    price: 210,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2015/10/subway-turkey-sub.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Taco Bell Crunchy Taco",
    price: 129,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/taco-bell-crunchy-taco-best.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Hardee's Biscuits",
    price: 99,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2018/07/hardees-sausage-biscuit.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Zaxby's Chicken Finger Plate",
    price: 299,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/zaxbys-chicken-finger-plate-buffalo.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}];
var drinks = [{
    name: "Fanta Peach",
    price: 60,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/fanta-peach.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Coca-Cola",
    price: 50,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/coca-cola-cinnamon.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Fanta Piña Colada",
    price: 60,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/fanta-pina-colada.jpg?resize=640,468&quality=82&strip=all",
    qty: 1
}, {
    name: "Crush Pineapple",
    price: 70,
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/07/pineapple-crush-soda.jpg?resize=640,468&quality=82&strip=all",
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
            out += `<div class="menu-item" style="background-image:url('${food[i].img}')"><div class="menu-item_container">`;
            out += `<i>${food[i].name}</i>`;
            out += `<i>${food[i].price}</i>`;
            out += `<div class="menu-item-btn" onclick='addToCart(` +
                "`" + JSON.stringify(food[i]) + "`" + `)'>Add Item</div></div></div>`;
        }
    } else if (req.query.item == 'drinks') {
        for (let i = 0; i < drinks.length; i++) {
            out += `<div class="menu-item" style="background-image:url('${drinks[i].img}')"><div class="menu-item_container">`;
            out += `<i>${drinks[i].name}</i>`;
            out += `<i>${drinks[i].price}</i>`;
            out += `<div class="menu-item-btn" onclick='addToCart(` +
                "`" + JSON.stringify(drinks[i]) + "`" + `)'>Add Item</div></div></div>`;
        }
    }
    res.end(out);
});
app.get('/food', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    let out = '';
    for (let i = 0; i < food.length; i++) {
        out += `<div class="menu-item" style="background-image=url(${food[i].img})"><div class="menu-item_container">`;
        out += `<i>${food[i].name}</i>`;
        out += `<i>${food[i].price} Rs</i>`;
        out += `<div class="menu-item-btn" onclick="addToCart('${JSON.stringify(food[i])}')">Add Item</div></div></div>`;
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
        out += `<i>${drinks[i].price} Rs</i>`;
        out += `<div class="menu-item-btn" onclick="addToCart(${JSON.stringify(drinks[i])})">Add Item</div></div></div>`;
    }
    res.end(out);
});
app.post('/add', (req, res) => {
    let items = JSON.parse(req.query.data);
    let cart = items.data;
    let cost = 0;
    for (let i = 0; i < cart.length; i++) {
        cost += cart[i].qty * cart[i].price;
    }
    res.setHeader('Content-Type', 'text/html');
    res.type('html');
    res.end(cost);
});
app.listen(port, () => { //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`
                    Now listening on port $ { port }
                    `);
});