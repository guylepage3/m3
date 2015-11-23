'use strict';

var Parser = require('./emblem/parser');
var compiler = require('./emblem/compiler');
require('./emblem/bootstrap');

exports['default'] = {
  Parser: Parser['default'],
  registerPartial: compiler.registerPartial,
  parse: compiler.parse,
  compile: compiler.compile,
  VERSION: "0.6.1"
};