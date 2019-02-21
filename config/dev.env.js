'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST:'"http://localhost:8088"',
  API_ROOT:'"http://localhost:8088/api"'
})
