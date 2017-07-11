/*
 * User signup Data
 * @path collaborator/signup.js
 * @file signup.js
 * @Scripted by Ananya Kundu
 */
 'use strict';
/*
 * Module dependencies
 */
var express = require('express'),
    router = express.Router();
var signup = require('../model/userSchema.js');
var connDb1 = require("../config");
var winston = require('winston');
var validator = require('express-validator');
console.log("signup api");

//create user
router.post('/', function(req, res) {
      try {
              signup.saveUserData(req.body, function(err, result) {
                  if (!err) {
                      if (!result) {
                          res.send({"status": true,"msg": "user email id already exist!"});
                      } else {
                          res.send({"status": true,"msg": "data is saved!"});
                      }
                      winston.info('Signup successfull');
                  }
                   else {
                      winston.error('Signup Unsuccessfull');
                      if (err == undefined) {
                          res.send({"status": false,"msg": "data is not saved"});
                      } else {
                          var validationErrors = [];
                          var errormsg = JSON.stringify(err);
                          var convertmsg = JSON.parse(errormsg).errors;
                          for (var key in convertmsg) {
                              validationErrors.push(convertmsg[key].message);
                          }
                          res.send({"status": false,"msg": validationErrors});
                      }
                  }
              });
        } catch (e) {
              console.log(e);
              res.send({"status": false,"msg":"server error"});
            }
    });
module.exports = router;
