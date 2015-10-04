
//dependencies
var should = require('should');
var lib    = require('../../lib');
var UserService = lib.UserService;

describe('UserService', function() {
    
    var service = null;
    beforeEach(function() {
        service = new UserService();
    });
    
    describe('getUsers', function() {
        
        it ('should throw when no callback is provided', function() {
            service.getUsers.bind(null).should.throwError();
        });
            
        it ('should return an object', function(done) {
            service.getUsers(function(err, pagedResult) {
                pagedResult.should.be.type('object');
                done();
            });
        });
        
        it ('should return an array of 5 users', function(done) {
            service.getUsers(function(err, pagedResult) {
                pagedResult.data.should.be.instanceOf(Array).and.have.lengthOf(5);
                pagedResult.data.forEach(function(user) {
                    
                    user.should.be.type('object');
                    user.email.should.be.type('string');
                    user.name.should.be.type('string');
                    user.id.should.be.type('string');
                });
                done();
            });
        });
            
        it ('should return meta-data about the collection', function(done) {
            service.getUsers(function(err, pagedResult) {
                pagedResult.count.should.eql(5);
                pagedResult.total.should.eql(500);
                pagedResult.limit.should.eql(5);
                pagedResult.offset.should.eql(0);
                done();
            });
        });
    });
});