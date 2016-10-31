var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlExam = require('../controllers/exam');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


router.post('/exams', ctrlExam.newExam);
console.log(ctrlExam.newExam);

module.exports = router;
