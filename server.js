const urlencode = require('urlencode')
const curl = require('curlrequest')
const glitcher = require('./glitcher')
require('dotenv').config()

var photo = urlencode(process.env.IMAGE_URL);
var optionImg = {
    url: `https://graph.facebook.com/${process.env.PAGE_ID}/photos?url=${photo}&access_token=${process.env.FACEBOOK_TOKEN}`,
    method:'POST'
}

// curl.request(optionImg, (err, data) =>{
// })

