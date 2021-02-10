/*
|--------------------------------------------------------------------------
| express required component describe by Express Documentation
|--------------------------------------------------------------------------
|
| Express.js, or simply Express, is a back end web application framework for Node.js,
| released as free and open-source software under the MIT License
| Express.js is very easy to implementation for MVC with asyc
|
*/

var express = require('express')

/*
|--------------------------------------------------------------------------
| session required 
|--------------------------------------------------------------------------
|
| Express session to given session to save the data object or any data parse. 
|
*/

var session = require('express-session')

/*
|--------------------------------------------------------------------------
| express required component describe by Express Documentation
|--------------------------------------------------------------------------
|
| Express.js, or simply Express, is a back end web application framework for Node.js,
| released as free and open-source software under the MIT License
| Express.js is very easy to implementation for MVC with asyc
|
*/

var flash = require('flash')
var app = express()

/*
|--------------------------------------------------------------------------
|  mongostore 
|--------------------------------------------------------------------------
|  mongostore
| 
*/

var mongostore = require('connect-mongo')(session);
var server = require('http').Server(app)

/*
|--------------------------------------------------------------------------
|  socket IO
|--------------------------------------------------------------------------
|  socket IO
| 
*/

var io  = require('socket.io')(server)

/*
|--------------------------------------------------------------------------
| path required component describe by nodejs path
|--------------------------------------------------------------------------
|
| The path module provides utilities for working with file and directory paths. It can be accessed using: const path = require('path');
|
*/
var path = require('path')

/*
|--------------------------------------------------------------------------
|  mongoose
|--------------------------------------------------------------------------
|  mongoose
| 
*/

var mongoose = require('mongoose')

/*
|--------------------------------------------------------------------------
|  jwt
|--------------------------------------------------------------------------
|  jwt
| 
*/

var jwt = require("jsonwebtoken")

/*
|--------------------------------------------------------------------------
|  multer
|--------------------------------------------------------------------------
|  multer
| 
*/

var multer = require('multer')

module.exports  = {
    express,
    session,
    flash,
    app,
    mongostore,
    server,
    io,
    path,
    mongoose,
    jwt,
    multer,
}