const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'jOnAtHaN',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {

        year: new Date().getFullYear()
    });
});

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Jonathan',
//         edad: '19',
//         url: req.url
//     };

//     res.send(salida); // Internamente reconoce el tipo de objeto y lo serializa en JSON
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});