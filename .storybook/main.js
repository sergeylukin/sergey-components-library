const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../components/**/*.stories.js'],
};
