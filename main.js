'use strict';

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// GET method for rendering page layouts
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get("/collection", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'collection.html'));
});

app.get("/deck", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'deck.html'));
});

app.get("/builder", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'builder.html'));
});

app.get("/update", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'update.html'));
});

// POST method responding using the body
app.post("/addNew", (req, res) => {
    console.log(req.body)
    const { cardName, quantity } = req.body;
    
    // getAPIVariable(cardName, quantity)

    res.send('send succesful');
});

// Function that sends card info to API microservice to get card data
function getAPIVariable(cardName, quantity) {
  console.log(cardName, quantity);
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});