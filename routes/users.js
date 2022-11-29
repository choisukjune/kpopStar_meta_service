var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, resonse, next) {
    
    var artist_id = req.query.artist_id
    var https = require('https');
    var options = {        
        hostname: 'api.twitter.com',
        port: 443,
        path: "/2/users/by/username/" + artist_id + "?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
        method: 'GET',
        headers:{
            "Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
    };
    
  var req = https.request(options, res => {
    if( res.statusCode == 200 )
    {
        console.log(`statusCode: ${res.statusCode}`)
        var r = "";
        res.on('data', function(d){
        r += d
        })
        res.on('end', function(){
        console.log( r );
            resonse.send(r);
        })
    }
    else
    {
        console.log( "Bad Request!" )
        console.log(`statusCode: ${res.statusCode}`)
    }
    
  })
  req.on('error', error => {
    console.error(error)
  })
  req.end()

    
  
});

module.exports = router;
