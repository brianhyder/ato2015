var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
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
  });
});

module.exports = router;
