const express = require('express');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const path = require('path');
const route = require('./routes'); //auto import index.js

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

// Template engine
// The code sets up the Handlebars template engine with a custom configuration. It specifies that the template files have the ".hbs" extension.
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// home, search, contact

// route init
route(app);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
});
