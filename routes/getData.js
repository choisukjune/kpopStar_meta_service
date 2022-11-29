var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/twitter', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    var https = require('https');
    var options = {        
        hostname: 'api.twitter.com',
        port: 443,
        path: "/2/users/by/username/" + artist_id + "?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,edit_history_tweet_ids,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,organic_metrics,possibly_sensitive,promoted_metrics,public_metrics,referenced_tweets,reply_settings,source,text,withheld",
        method: 'GET',
        headers:{
            "Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
    };
    /*
    
    curl "https://api.twitter.com/2/users/573299587/tweets?max_results=20&media.fields=alt_text,duration_ms,height,media_key,non_public_metrics,organic_metrics,preview_image_url,promoted_metrics,public_metrics,type,url,variants,width" -H "Authorization:  Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X"
    */
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
            var o = JSON.parse( r )
            getTwittList( o.data.id )
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
      resonse.send({ error : error })
  })
  req.end()

    
 var getTwittList = function(userId){
    
    var https = require('https');

var querystring = require('querystring');


    var options = {        
       hostname: 'api.twitter.com',
        port: 443,
        path: "/2/users/" + userId + "/tweets?max_results=20&tweet.fields=attachments,created_at,entities,id,text,context_annotations&expansions=referenced_tweets.id.author_id,attachments.media_keys,entities.mentions.username,author_id&media.fields=media_key,preview_image_url,url,width&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
        method: 'GET',
        headers:{
            "Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
};
    
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      console.log( r );
        resonse.send(r);
    })
  })
  req.on('error', error => {
    console.error(error)
    resonse.send({ error : error })
  })
  req.end()
    
}   
    
  
});

router.get('/news', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    console.log(artist_id)
    var https = require('https');
    var options = {        
        hostname: 'openapi.naver.com',
        port: 443,
        path: "/v1/search/news.json?query=" + encodeURI( artist_id ) + "&display=5&start=1&sort=sim",
        method: 'GET',
        headers:{
            "X-Naver-Client-Id": "9UVPlZQvIgc2N0VMbJKf",
            "X-Naver-Client-Secret": "HnoxOu3K17" ,
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
      resonse.send({ error : error })
  })
  req.end()

    
  
});

router.get('/youtube', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    var https = require('https');
    var options = {        
        hostname: 'www.googleapis.com',
        port: 443,
        path: "/youtube/v3/channels?part=statistics&id=" + artist_id + "&maxResults=5&key=AIzaSyAbw5RHbmB2LGOikgoWrIEhpyBTlDz7Qec",
        method: 'GET',
        headers:{
            //"Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
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
      resonse.send({ error : error })
  })
  req.end()

    
  
});

router.get('/instagram', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    var r = require('child_process').execSync('curl "https://www.instagram.com/blackpinkofficial/?__a=1&__d=1"').toString();
    console.log( r.toString() )
    resonse.send(r);
  //   var https = require('https');
    
  //   var querystring = require('querystring');

  //   var parameters = {
  //       "__a": "1",
  //       "__d": "1"
  //   }
    
  //   var get_request_args = querystring.stringify(parameters);

  //   var options = {        
  //       hostname: 'www.instagram.com',
  //       port: 443,
  //       path: "/" + artist_id + "/?__a=1&__d=1",
  //       method: 'GET',
  //       headers:{
  //           //"Authorization": ' Bearer AAAAAAAAAAAAAAAAAAAAADo4gQEAAAAARcU4eaVi2XP8Rl0S%2FbQCMANA8RU%3D9vCnZopmK11994WVN9yCZEfMmnI6hbHlTSWyPiBVMoWaEzzE8X',
  //           "Accept": 'application/json',
  //           "Content-Type": 'application/json'
  //      }
  //   };
  //   console.log( options );
  // var req = https.request(options, res => {
  //   if( res.statusCode == 200 )
  //   {
  //       console.log(`statusCode: ${res.statusCode}`)
  //       var r = "";
  //       res.on('data', function(d){
  //       r += d
  //       })
  //       res.on('end', function(){
  //       console.log( r );
  //           resonse.send(r);
  //       })
  //   }
  //   else
  //   {
  //       console.log( "Bad Request!" )
  //       console.log(`statusCode: ${res.statusCode}`)
  //       resonse.send({ error : res.statusCode })
  //   }
    
  // })
  // req.on('error', error => {
  //   console.error(error)
  //     resonse.send({ error : error })
  // })
  // req.end()

    
  
});

router.get('/spotifyByAlbum', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    // //spotify

var client_id = '8c414bf3c2cb4373af8a6a5a1d51ce4c';
var client_secret = 'c7155ac24e9a4a23bcce3336d3b27985';




var https = require('https');

var querystring = require('querystring');
var https = require('https')
 var postData = querystring.stringify({
     'grant_type': 'client_credentials'
 });

  var options = {
    "hostname": "accounts.spotify.com",
    "method": "POST",
    "path" : "/api/token",
    "port" : 443,
    "encoding": "utf8",
    "followRedirect": true,
    "headers": {
      "Authorization": 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
      "Content-Type": 'application/x-www-form-urlencoded',
      "Content-Length": Buffer.byteLength(postData),
    },
    'muteHttpExceptions': true
  }
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      //console.log( r );
        var o = JSON.parse( r )
        console.log( o )
        getArtistAlbum( o.access_token,artist_id )
        //getArtistTopTrack( o.access_token,"41MozSoPIsD1dJM0CLPjZF" )
    })
  })
  req.on('error', error => {
    console.error(error)
      resonse.send({ error : error })
  })
  req.write(postData);
  req.end()



//3Nrfpe0tUJi4K4DXYWgMUX

/*
curl -X "GET" "https://api.spotify.com/v1/artists/" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAIK5ek9aR_KUrpy3-otBFDnOfFEEEfDEdA8uFnFCE2FqF8RJPkJ-Ibja4EFbAVaopnO5OqPlnLSu8vlGA_8hYtVkummOy9hYbqfjqf2dUoyKombDRzpr_WZDOOxGuJjKkYNxcbkM8x_eInMfo7T6QfIeKz_GIDjmy3cuG7-KwVEilrxEmO5HaKKJt5-C4mdEnIsmcc"
*/

/*
curl -X "GET" "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?limit=1&offset=0" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBS1yOJ6c6n7GfuLN-dZrT9RPGDcToCxdV19v2wQadaqwANcm8teHxum75XmNtE0l6QleBKK8LxchtMepu2vPQpfsWpbR1AmI-UrVQXOPTMhbzLaj-Hl5X8qmF296XV1hJdiWarLxn_qRL-yYrFauS9C-xJtCcTrOc3G9nwyOiDPWpkLTCyE6H8sB88X-Anyl4"
*/    
    
var getArtistAlbum = function(token,artistId){
    
    var https = require('https');

var querystring = require('querystring');


    var options = {        
        hostname: 'api.spotify.com',
        port: 443,
        path: '/v1/artists/' + artistId + '/albums?limit=10&offset=0',
        method: 'GET',
        headers:{
            "Authorization": ' Bearer ' + token,
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
};
    
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
   console.log( r );
        resonse.send(r);
    })
  })
  req.on('error', error => {
    console.error(error)
    resonse.send({ error : error })
  })
  req.end()
    
}

});

router.get('/spotifyByTrack', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    // //spotify

var client_id = '8c414bf3c2cb4373af8a6a5a1d51ce4c';
var client_secret = 'c7155ac24e9a4a23bcce3336d3b27985';




var https = require('https');

var querystring = require('querystring');
var https = require('https')
 var postData = querystring.stringify({
     'grant_type': 'client_credentials'
 });

  var options = {
    "hostname": "accounts.spotify.com",
    "method": "POST",
    "path" : "/api/token",
    "port" : 443,
    "encoding": "utf8",
    "followRedirect": true,
    "headers": {
      "Authorization": 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
      "Content-Type": 'application/x-www-form-urlencoded',
      "Content-Length": Buffer.byteLength(postData),
    },
    'muteHttpExceptions': true
  }
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      //console.log( r );
        var o = JSON.parse( r )
        console.log( o )
        getArtistTrack( o.access_token,artist_id )
        //getArtistTopTrack( o.access_token,"41MozSoPIsD1dJM0CLPjZF" )
    })
  })
  req.on('error', error => {
    console.error(error)
      resonse.send({ error : error })
  })
  req.write(postData);
  req.end()



//3Nrfpe0tUJi4K4DXYWgMUX

/*
curl -X "GET" "https://api.spotify.com/v1/search?q=blackpink&type=track%2Cartist&limit=10&offset=5&include_external=true" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQA8FZz_JxnzkPtVWXxfM5BtGLDCwUHFMa7KlycrMv4kTaF9WknCfdW5V6W9CmhHVc5X3C94hyA18QoFAx13Mxuun11KPHFdCszAfdeGB-QfZELW6vnOgmqlSW7XkVdPGtIiXxqPgCcXkOEvdUHiXIVLdbQEDXSCFFQtcqy0dd_7zUv5HfauVlJ_mjm_Jvwp6Qs"
*/    
    
var getArtistTrack = function(token,artistName){
    
    var https = require('https');

var querystring = require('querystring');


    var options = {        
        hostname: 'api.spotify.com',
        port: 443,
        path: '/v1/search?q=' + artistName + '&type=track%2Cartist&limit=5&offset=0',
        method: 'GET',
        headers:{
            "Authorization": ' Bearer ' + token,
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
};
    
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      console.log( r );
        resonse.send(r);
    })
  })
  req.on('error', error => {
    console.error(error)
    resonse.send({ error : error })
  })
  req.end()
    
}
    
  
});
    
router.get('/spotify', function(req, resonse, next) {
    var artist_id = req.query.artist_id
    // //spotify

var client_id = '8c414bf3c2cb4373af8a6a5a1d51ce4c';
var client_secret = 'c7155ac24e9a4a23bcce3336d3b27985';




var https = require('https');

var querystring = require('querystring');
var https = require('https')
 var postData = querystring.stringify({
     'grant_type': 'client_credentials'
 });

  var options = {
    "hostname": "accounts.spotify.com",
    "method": "POST",
    "path" : "/api/token",
    "port" : 443,
    "encoding": "utf8",
    "followRedirect": true,
    "headers": {
      "Authorization": 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
      "Content-Type": 'application/x-www-form-urlencoded',
      "Content-Length": Buffer.byteLength(postData),
    },
    'muteHttpExceptions': true
  }
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      //console.log( r );
        var o = JSON.parse( r )
        console.log( o )
        getArtistInfo( o.access_token,artist_id )
        //getArtistTopTrack( o.access_token,"41MozSoPIsD1dJM0CLPjZF" )
    })
  })
  req.on('error', error => {
    console.error(error)
      resonse.send({ error : error })
  })
  req.write(postData);
  req.end()



//3Nrfpe0tUJi4K4DXYWgMUX

/*
curl -X "GET" "https://api.spotify.com/v1/artists/" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAIK5ek9aR_KUrpy3-otBFDnOfFEEEfDEdA8uFnFCE2FqF8RJPkJ-Ibja4EFbAVaopnO5OqPlnLSu8vlGA_8hYtVkummOy9hYbqfjqf2dUoyKombDRzpr_WZDOOxGuJjKkYNxcbkM8x_eInMfo7T6QfIeKz_GIDjmy3cuG7-KwVEilrxEmO5HaKKJt5-C4mdEnIsmcc"
*/

var getArtistInfo = function(token,artistId){
    
    var https = require('https');

var querystring = require('querystring');


    var options = {        
        hostname: 'api.spotify.com',
        port: 443,
        path: '/v1/artists/' + artistId,
        method: 'GET',
        headers:{
            "Authorization": ' Bearer ' + token,
            //"Accept": 'application/json',
            "Content-Type": 'application/json'
       }
};
    
  var req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    var r = "";
	res.on('data', function(d){
      r += d
    })
	res.on('end', function(){
      console.log( r );
        resonse.send(r);
    })
  })
  req.on('error', error => {
    console.error(error)
    resonse.send({ error : error })
  })
  req.end()
    
}

    
  
});

module.exports = router;
