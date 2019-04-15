const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Define paths for Express Config
const publicPath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialsPath);

// Setting up static files for Express
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        developer: 'Narayana Suri',
    });
});

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Page',
//         developer: 'Narayana Suri',
//     });
// });

// app.get('/products', (req, res) => {
//     if (!req.query.search) {
//         res.send({
//             error : 'You must provide a search term!'
//         })
//     } else {
//         console.log(req.query);
//         res.send({
//             products : []
//         });
//     }
// });

app.get('*', (req, res) => {
    res.render('404', {
        message : 'Oops, not found, compadre!',
        developer: 'Narayana Suri'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});