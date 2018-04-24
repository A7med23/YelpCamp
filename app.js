const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds');
});

app.listen(4000, () => {
    console.log('YelpCamp Server Has Been Initialized');
});