// Utilities
const fs = require('fs')

function createFile (filename) {
  fs.open(filename, 'r', function (err, fd) {
    if (!err) return

    fs.writeFile(filename, '', function (err) {
      if (err) console.log(err)
    })
  })
}

module.exports = { createFile }
