/*
 * app.js - Hello World
*/

/*jslint      browser: true, continue: true,
devel: true,  indent: 2,     maxerr: 50,
newcap: true, nomen: true,   plusplus: true,
regexp: true, sloppy: true,  vars: false,
white: true
*/

/*global */

var http, server;

http = require( 'http' );
server = http.createServer( function( request, response ) {
  response.writeHead( 200, { 'Content-type': 'text/plain' } );
  response.write( 'Hello World' );
  response.end();
}).listen( 3000 );

console.log( 'Listening on port %d', server.address().port );