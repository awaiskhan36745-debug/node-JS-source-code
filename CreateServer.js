const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>Hello hadi</h1>');
//     res.end();
// }).listen(1000)



const sayhello = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello awais</h1>');
    res.end();
};
http.createServer(sayhello).listen(1000);