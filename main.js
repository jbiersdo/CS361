'use strict';

const express = require("express");
const app = express();
const PORT = 3000;
const nodemailer = require('nodemailer');

app.use(express.urlencoded({
    extended: true
}));

function navCollection() {
  location.href = 'collection.html';
}

function navDeck() {
  location.href = 'deck.html';
}

function navBuilder() {
  location.href = 'builder.html';
}

function navUpdate() {
  location.href = 'update.html';
}

// POST method responding using the body
app.post("/addNew", (req, res) => {
    const { cardname, quantity } = req.body;
    
    main(cardname, quantity)

    res.send(
        `${htmlTop}`
      );
    
      console.log(req.body);
});

app.use(express.static('public'));

let htmlTop = `
  <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" contents="ie=edge">
      <title>MtG Organizer</title>
      <link rel="stylesheet" href="{{ url_for('static', filename='css/main.css') }}">
      <script src='main.js'></script>
    </head>
`;

let htmlBottom = `
      </main>
    </body>
    <footer>&copy; John Biersdorf 2023</footer>
    </html>
`;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});