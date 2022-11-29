var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:artist', function(req, resonse, next) {
    console.log( global.data[ req.params.artist ]) 
	resonse.render("artist",{ data : global.data[ req.params.artist ], artistKey : req.params.artist });
    
  
});

module.exports = router;
