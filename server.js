
/****
 * server.js
 * @path server.js
 * @file server.js
 * @scripted by Ananya Kundu
 ****/
'use strict';
/*
 * Module dependencies
 */

var express = require('express'),
 	  app = express(),
	  bodyParser = require('body-parser');
var connection = require ('./server/config/config.js');
// var morgan = require ('morgan');
// var cors = require('cors');
var winston = require('winston');
const path = require('path');
// const signUp = require("./server/controller");

//configure winstone file for logger
winston.configure({
    transports: [
        new (winston.transports.File)({
                name  : "info-file",
                filename : 'infofile.log',
                level :'info'
              }),
        new (winston.transports.File)({
                name  : "error-file",
                filename : 'error.log',
                level :'error'
        }),
        new (winston.transports.File)({
                name  : "system-error-file",
                filename : 'systemError.log',
                level :'systemError'
        })
    ]
});

//image size limit maximum 40MB
app.use(bodyParser.urlencoded({ extended: true ,limit:'40MB'}));
app.use(bodyParser.json({limit:'40MB'}));

app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/', signUp);
app.use(require("./server/controller"));
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});




// app.use(morgan('dev'));

//to access all the file of public folder
// app.use(express.static('./public'));
// app.use(cors());
// app.use(require('./server/controller'));

//strating server with port number 8081

var port = process.env.PORT || 4200;

app.listen(port,function(){
      connection.mongoconnection();
		  console.log('Server is running on port :: ',+port);
	});
