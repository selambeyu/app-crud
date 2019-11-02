var express = require('express');
var UserController=require('../controller/user')
var router=express.Router();


router.post('/create',UserController.create);

router.post('/update',UserController.update);

router.get('/get',UserController.getData);

router.delete('/delete',UserController.delete)

module.exports=router;