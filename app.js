const express = require('express')
const session = require('express-session'); // ייבוא express-session
const server = express () //building the server
const port = 80;

const connectDB = require('./db'); // Adjust the path as needed
connectDB();


const jewelries = require('./routes/jewelries')
const users = require('./routes/users')
const orders = require('./routes/orders')
const branches = require('./routes/branches')
const cart = require('./routes/cart')
const api = require('./routes/api')

//const jewelriesController= require('./controllers/jewelries')

server.use(express.json());

server.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

server.use(jewelries)
server.use(users)
server.use(orders)
server.use(branches)
server.use(api)
server.use(cart)


server.use(express.static('public'));

server.listen(port, () => {console.log(`Server is running on port ${port}`);});

