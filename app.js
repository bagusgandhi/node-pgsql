const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

  //test
  db.authenticate()
    .then(() => console.log('connected'))
    .catch((e) => console.log(e.message));

const app = express();

// app.get('/', (req, res) => {
//     res.send('hello motto');
// });
app.use('/', require('./routes/gigs'));

app.listen(3002, () => {
    console.log('listen on port 3002');
});