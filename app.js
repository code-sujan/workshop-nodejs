require('module-alias/register');
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/', routes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})