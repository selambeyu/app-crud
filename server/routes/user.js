var express = require('express');
var router = express.Router();
var user = require('../controller/user');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 **_ To create the New user
 _**/
router.post('/', user.create);

/**
 _ TO get the single user by their username eg.email
 _/


router.get('/user/:username', user.find);

/**
 **_ To update user data(fields) by user ID
 _**/
router.put('/updatebyid', user.updateById);

/**
 _ To update the user data by filter condition
 _/
router.put('/update', user.update);

/_*
 _ To delete the user by condition
 */
router.delete('/delete', user.delete);

module.exports = router;

