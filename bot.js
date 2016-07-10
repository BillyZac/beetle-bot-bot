var Twit = require('twit')
var fs = require('fs')
var takeScreenshot = require('./take-screenshot')

require('dotenv').config()

var T = new Twit({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token: process.env.ACCESS_TOKEN_KEY,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET,
 timeout_ms: 60*1000
})

takeScreenshot()
.then(function(filePath) {
  var b64content = fs.readFileSync(filePath, { encoding: 'base64' })
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    var status = 'Me beetle.'
    var mediaIdStr = data.media_id_string
    var params = {
        status: status,
        media_ids: [mediaIdStr]
      }
    T.post('statuses/update', params, function (error, data, response) {
      if (error) { console.log('There was an error posting to Twitter:', error) }
      else { console.log('Successfully posted.') }
    })
  })
})
