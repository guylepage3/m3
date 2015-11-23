'use strict';

exports.compile = compile;

var parser = require('./parser');
var EmberDelegate = require('./parser-delegate/ember');
var preprocessor = require('./preprocessor');
var template_compiler = require('./template-compiler');
var ast_builder = require('./ast-builder');



function compile(emblem) {
  var builder = ast_builder.generateBuilder();
  var processedEmblem = preprocessor.processSync(emblem);
  parser.parse(processedEmblem, { builder: builder });
  var ast = builder.toAST();
  var result = template_compiler.compile(ast);
  return result;
}