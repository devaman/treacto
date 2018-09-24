var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/users/user');
var mongoose = require('mongoose');
var passport=require('passport');
var config=require('../config/database')
require('../config/passport')(passport);
/* GET api listing. */
router.post('/signup', function (req, res, next) {
  console.log(req.body);
  
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass some Username and password" })
  }else{
    var newUser=new User({
      username:req.body.username,
      password:req.body.password
    })
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});
router.post('/signin', function (req, res,next) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;
    console.log(user,req.body.username);
    
    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign({ ...user }, config.secret, { expiresIn: '60m' });
          // return the information including token as JSON
          res.json({ success: true, token:token,username:user._doc.username });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});




module.exports = router;
