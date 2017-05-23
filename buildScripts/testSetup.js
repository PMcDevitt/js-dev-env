// Register bable to transpile before tests are run
require('babel-register')()

 // Disable webpack features that Mocha doesn't use
require.extensions['.css'] = function () {}