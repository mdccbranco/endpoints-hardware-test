require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require('hbs');


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ROUTES MIDDLEWARE STARTS HERE:
app.use('/api', require('./routes/esp32'));
app.use('/', require('./routes/json'));

// const index = require("./routes/index");
// app.use("/", index);

app.listen(process.env.PORT, () => console.log("Conectado"));
