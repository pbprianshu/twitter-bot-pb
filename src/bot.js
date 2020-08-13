const twit = require('twit');
const config =  require('./config.js');
var Twitter = new twit(config);
Twitter.get('search/tweets', { q: 'corona', count: 100 }, function(err, data, response) {
    console.log(data)
  })