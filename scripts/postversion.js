const archiver = require('archiver')
const fs = require('fs')
const shell = require('shelljs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

function copy (from) {
  const path = resolve(`../${from}`).split('\\')

  path.splice(-1, 0, 'staging\\theme')

  shell.cp('-R', from, path.join('\\'))
}

shell.exec('rimraf dist')
shell.exec('rimraf staging')
shell.mkdir('-p', 'dist')
shell.mkdir('-p', 'staging/theme')

const output = fs.createWriteStream(resolve('../dist/ecommerce.zip'))
const archive = archiver('zip', { zlib: { level: 9 } })

fs.readdir(resolve('../'), (err, items) => {
  if (err) return console.log(err)

  const regexp = /node_modules|data|dist|staging|yarn-error.log|.git|.env$|release/

  for (const item of items) !item.match(regexp) && copy(item)
})

shell.exec('conventional-changelog -i staging/CHANGELOG.md -s -r 0')
archive.append(fs.createReadStream(resolve('../README.md')), { name: 'README.md' })

archive.pipe(output)
archive.directory(resolve('../staging'), false)
archive.finalize().then(() => shell.exec('rimraf staging'))
