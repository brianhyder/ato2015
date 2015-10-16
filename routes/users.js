var util        = require('util');
var express     = require('express');
var router      = express.Router();
var UserService = require('../lib').UserService;

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var service = new UserService();
    service.getUsers(function(err, users) {
        if (util.isError(err)) {
            return next(err);
        }
        res.send(users);
    });
});

/* GET user by ID. */
router.get('/:id', function(req, res, next) {
    
    var service = new UserService();
    service.getUser(req.params.id, function(err, user) {
        if (util.isError(err)) {
            return next(err);
        }
        else if (!user) {
            //trigger 404
            return next();
        }
        res.send(user);
    });
});

module.exports = router;
