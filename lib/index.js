module.exports = {
    UserService: function() {
        
        this.getUsers = function(options, cb) {
            if (typeof options === 'function') {
                cb = options;
                options = {};
            }
            
            var users = {
                limit: 5,
                offset: 0,
                total: 500,
                count: 5,
                data: [
                    {
                      id: 1,
                      email: "rayland.givens@justified.org",
                      name: "Rayland Givens",
                    },
                    {
                      id: 2,
                      email: "raymond.reddington@theblacklist.org",
                      name: "Raymond Reddington",
                    },
                    {
                      id: 3,
                      email: "walt.longmire@longmire.org",
                      name: "Walt Longmire",
                    },
                    {
                      id: 4,
                      email: "dexter.morgan@dexter.org",
                      name: "Dextor Morgan",
                    },
                    {
                      id: 5,
                      email: "walter.white@breakingbad.org",
                      name: "Walter White",
                    },
                ]
            };
            
            cb(null, users);
        };
    }
};
