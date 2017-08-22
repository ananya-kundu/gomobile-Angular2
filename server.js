
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

var winston = require('winston');
const path = require('path');

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
app.use(require("./server/controller"));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


var port = process.env.PORT || 4200;

app.listen(port,function(){
      connection.mongoconnection();
		  console.log('Server is running on port :: ',+port);
	});
