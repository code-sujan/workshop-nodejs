require('module-alias/register');
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const ejsLayouts = require('express-ejs-layouts');
const dayjs = require('dayjs');
const authenticate = require('@/middlewares/Authenticate');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(ejsLayouts);
app.set("layout extractScripts", true);
app.locals.dayjs = dayjs;

app.use(session({
    secret : "session-secret-key"
}));
app.use(authenticate);
app.use('/', routes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})