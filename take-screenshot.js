var webshot = require('webshot')

var baseImageUrl = require('./config').beetleImageUrl
const random = (start, end) => (
  Math.ceil(start + Math.random() * (end - start))
)
var imageUrl = `${baseImageUrl}#/${random(0, 10)}`

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
