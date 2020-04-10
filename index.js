'use strict';

// Global Import
const server = require('./server/index');
const express = require('express');
const exhbs = require('express-handlebars');

const app = express();
const hbs = exhbs.create({
  extname: 'hbs',
  defaultLayout: 'main'
});

// Router Import
const routerHome = require('./routes/home');

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Router Register
app.use('/', routerHome);

app.use(express.static('public'));

server(app);
