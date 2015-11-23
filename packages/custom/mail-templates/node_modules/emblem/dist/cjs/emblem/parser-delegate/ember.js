'use strict';

var base = require('./base');

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/* jshint proto: true */

var EmberParserDelegate = (function (ParserDelegate) {
  function EmberParserDelegate(AST, parse) {
    _classCallCheck(this, EmberParserDelegate);

    this.AST = AST;
    this.recursiveParse = parse;
  }

  _inherits(EmberParserDelegate, ParserDelegate);

  _prototypeProperties(EmberParserDelegate, null, {
    handleCapitalizedMustache: {
      value: function handleCapitalizedMustache(mustache) {
        return this.unshiftParam(mustache, "view");
      },
      writable: true,
      configurable: true
    },
    handleUnboundSuffix: {
      value: function handleUnboundSuffix(mustacheNode, id) {
        if (id._emblemSuffixModifier === "!") {
          return this.unshiftParam(mustacheNode, "unbound");
        } else {
          return mustacheNode;
        }
      },
      writable: true,
      configurable: true
    }
  });

  return EmberParserDelegate;
})(base['default']);

exports['default'] = EmberParserDelegate;