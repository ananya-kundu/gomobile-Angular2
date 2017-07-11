
/*
  * User logIn Data
  * @path controller/logIn.js
  * @file logIn.js
  * @Scripted by Ananya Kundu
  */
 'use strict';

 /*
  * Module dependencies
  */
var express = require('express'),
  router = express.Router(),
  login = require('../model/userSchema');
var app = express();

// app.use(cookieParser());

var winston = require('winston');
var connDb = require("../config/config");
var connDb1 = require("../config/index");

var jwt = require('jsonwebtoken');        // used to create, sign and verify tokens

/* POST call for login*/
router.post('/', function(req, res) {

try {

              login.checkLoginData(req.body, function(err, result) {
                  if (!err) {
                    // console.log("login 1",err,result);
                      if (!result) {
                          res.send({"status": true,"msg": "login failed"});
                      } else {
                        // console.log("login 3 result:",result);
                          res.send({"status": true,"msg": "login successful"});
                      }
                  }
                   else {
                      winston.error('login Unsuccessfull');
                      if (err == undefined) {
                        // console.log("signup 4");
                          res.send({"status": false,"msg": "login unsuccessful"});
                      }
                  }

              });

    } catch (e) {
          console.log(e);
          res.send({"status": false,"msg":"server error"});
      }
  });


    module.exports = router;
