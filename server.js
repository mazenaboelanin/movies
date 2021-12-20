const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const db = require('./config/db');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

/* DATABASE */

dbConnection();


app.use('/', indexRouter);
app.listen( PORT, () => console.log(`Server is running on port ${PORT}!`));