const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();


app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.get('/api/initialvalues',(req, res, next) => {
  var filename = path.join(__dirname, 'initialValues.json')
  let rawdata = fs.readFileSync(filename);
  var content = JSON.parse(rawdata);

  res.status(200).json({
    message: "User fetched successfully!",
    data: content
  });
});

app.post('/api/post',(req, res, next) => {


});

module.exports = app;


