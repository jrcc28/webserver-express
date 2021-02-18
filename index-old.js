const http = require('http');

http.createServer((req, resp) => {
    // resp.serHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // resp.writeHead(200, { 'Content-Type': 'application/csv' });
    // resp.write('id, name\n');
    // resp.write('1, Jose\n');
    // resp.write('2, Jose\n');
    // ...
    // resp.end();

    resp.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Jose',
        edad: 22,
        url: req.url // Request URL
    }
    resp.write(JSON.stringify(salida));
    // resp.write('Hello World');
    resp.end();
}).listen(8080); // Port

console.log('Listening on port 8080');