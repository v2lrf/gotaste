const path = require('path')
const fs = require('fs')

const FILES_TO_IMPORT_TO_STORYBOOK = ['nprogress.css']

const storybookFolderFiles = fs.readdirSync(__dirname)

storybookFolderFiles.forEach(function(file) {
  FILES_TO_IMPORT_TO_STORYBOOK.forEach(function(value) {
    if (value === file) {
      fs.unlinkSync(path.join(__dirname, file))
    }
  })
})

FILES_TO_IMPORT_TO_STORYBOOK.forEach(function(file) {
  fs.copyFileSync(
    path.join(__dirname, '..', 'client', 'styles', file),
    path.join(__dirname, file)
  )
})
