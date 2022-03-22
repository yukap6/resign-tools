#!/usr/bin/env node
const rmNodeModules = require('./dist')
const path = require('path')

rmNodeModules(process.cwd())
console.log('Done.')