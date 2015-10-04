var express = require('express');
var router = express.Router();
var UserService = require('../lib').UserService;

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var service = new UserService();
    res.send(service.getUsers());
});

module.exports = router;
