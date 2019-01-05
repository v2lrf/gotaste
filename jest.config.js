module.exports = {
  setupFiles: ['./app/javascript/test/setup.js'],
  roots: ['./app/javascript'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  }
}
