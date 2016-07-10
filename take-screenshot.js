var webshot = require('webshot')

var baseImageUrl = require('./config').beetleImageUrl

var options = {
  screenSize: {
    width: 600,
    height: 600
  },
  shotSize: {
    width: 600,
    height: 600
  },
  shotOffset: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
}

function takeScreenshot() {
  var imageUrl = baseImageUrl
  console.log('Getting image from here:', imageUrl);

  return new Promise(function(resolve, reject) {
    var fileName = 'images/' + Date.now() + '.png'
    webshot(imageUrl, fileName, options, function(error) {
      if (error) reject(error)
      resolve(fileName)
    })
  })
}

module.exports = takeScreenshot
