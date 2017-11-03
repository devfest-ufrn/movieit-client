const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      path: path.join(__dirname, 'src')
    },
    'postcss-cssnext': {}
  }
};
