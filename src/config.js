//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
require('dotenv').config()
module.exports = {
    consumer_key: process.env.API_KEY,  
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,  
    access_token_secret: process.env.ACCESS_SECRET_TOKEN
  }