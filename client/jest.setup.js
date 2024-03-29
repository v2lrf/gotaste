const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
