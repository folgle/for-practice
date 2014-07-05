/*
 * app.js - 汎用ルーティングを備えたExpressサーバ
*/

/*jslint      node: true,    continue: true,
devel: true,  indent: 2,     maxerr: 50,
newcap: true, nomen: true,   plusplus: true,
regexp: true, sloppy: true,  vars: false,
white: true
*/

/*global */

// ------------ モジュールスコープ変数開始 ------------
'use strict';

var
  env,
  http = require( 'http' ),
  express = require( 'express' ),
  morgan = require( 'morgan' ),
  bodyParser = require( 'body-parser' ),
  methodOverride = require( 'method-override' ),
  errorhandler = require( 'errorhandler' ),
  routes = require( './routes' ),

  app = express(),
  server = http.createServer( app );
// ------------ モジュールスコープ変数終了 ------------

// ------------ サーバ構成開始 ------------
// all environments
app.use( bodyParser() );
app.use( methodOverride( 'X-HTTP-Method-Override' ) );
app.use( express.static( __dirname + '/public' ) );

env = app.get( 'env' ) || 'development'

// development
if( 'development' == env ) {
  app.use( morgan() );
  app.use( errorhandler() )
}

//production
if( 'production' == env ) {
  app.use( errorhandler() );
}

routes.configRoutes( app, server );
// ------------ サーバ構成終了 ------------


// ------------ サーバ起動開始 ------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
);
// ------------ サーバ起動終了 ------------