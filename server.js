const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers')

const port = process.env.PORT || 3000;

/**
 * Middleware: Instruccion/callback que se va a ejecutar siempre sin importar el url solicitado
 */
app.use(express.static(__dirname + '/public')) // Folder to use public or static. Everyone can see this folder and it's content

// Handlebars: Express hbs engine
// __dirname is a global name of the path
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// Be carefull when use static server or server service "Get /". Could create errors
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Rodolfo Calvo'
    }); // home.hbs
})

app.get('/about', (req, res) => {
    res.render('about'); // about.hbs
})

// app.get('/data', (req, res) => {
//     res.send('Hello World')
// })

app.listen(port, () => {
    console.log(`Listening requests on ${ port } `);
})