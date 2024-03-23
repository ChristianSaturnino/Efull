const express = require('express');
const ejs = require('ejs');
const path = require('path'); // Importe o módulo path
const app = express();
const ejsMate = require('ejs-mate');

app.get('/', (req, res) => {
    res.render('index'); 
});

app.listen(3000, () => {
    console.log('Server Open');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// Defina o diretório de visualizações e layouts
app.set('views', [
    path.join(__dirname, 'views'), // Defina o diretório de visualizações
    path.join(__dirname, 'layouts') // Defina o diretório de layouts
]);
