const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const resolve = file => path.resolve(__dirname, file)
const recursive = require('recursive-readdir')

// Resolves bug with pre-render spa
// library including localhost paths
// for whatever reason
recursive(resolve('../dist'), [], (err, files) => {
  err && console.log(err)

  for (const file of files) {
    if (path.extname(file) !== '.html') continue

    let read = fs.readFileSync(file, 'utf8')

    read = read.replace(/http:\/\/localhost:8000/g, '')

    fs.writeFileSync(file, read, 'utf8')
  }
})

shell.rm('-rf', resolve('../data'))
