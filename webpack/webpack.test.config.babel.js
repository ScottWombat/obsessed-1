var webpack = require('webpack');
import Config from 'webpack-config';
import path from 'path';
 
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');


export default new Config().extend('webpack/webpack.base.config.babel.js').merge({
    entry: {
       all_tests: './testsuits/all-tests.js',
       test_helper: './test-helpers/test-helper.js'
    },
    output: {
        filename: './testbuild/[name].js'
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        fs: 'empty'
    },
    plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha --colors --require ./testbuild/test_helper.js ./testbuild/all_tests.js"
    })
  ]
});



