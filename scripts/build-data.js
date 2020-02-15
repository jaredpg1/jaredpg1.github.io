// Utilities
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const resolve = file => path.resolve(__dirname, file)
const error = err => err && console.log(err)

shell.rm('-rf', resolve('../data'))
shell.mkdir(resolve('../data'))
fs.writeFile(resolve('../data/rendered-routes.json'), '{}', error)
fs.writeFile(resolve('../data/collections-with-products.json'), '{}', error)
