/**
 * Created by Jan on 7/20/2014.
 */

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var fq = require('fq');


function processRequest(req)
{
    req.pipe(process.stdout);

}

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

    if(req.method == 'POST')
    {
        processRequest(request);
    }
    response.writeHead(200, {"Content-Type": "text/plain"});

    response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8008);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

