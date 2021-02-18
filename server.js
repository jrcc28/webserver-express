const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers')

const port = process.env.PORT || 3000;

/**
 * Middleware: Instruccion/callback que se va a ejecutar siempre sin importar el url solicitado
 */
app.use(express.static(__dirname + '/public')) // Folder to use public or static. Everyone can see this folder and its content

// Handlebars: Express hbs engine
// __dirname is a global name of the path
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// Be carefull when use static server or server service "Get /". Could create errors
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Rodolfo Calvo',
        tittle: 'Learning NodeJS'
    }); // home.hbs
})

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html');
    res.render('generic');
})

app.get('/elements', (req, res) => {
    res.render('elements');
    // res.sendFile(__dirname + '/public/elements.html');
})

app.get('/about', (req, res) => {
    res.render('about'); // about.hbs
})

app.get('*', (req, res) => {
    // res.send('404 | Page not found');
    // res.sendFile(__dirname + '/public/404.hbs');
    res.render('404'); // 404.hbs
})

// app.get('/data', (req, res) => {
//     res.send('Hello World')
// })

app.listen(port, () => {
    console.log(`Listening requests on ${ port } `);
})