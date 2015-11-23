'use strict';

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ParserDelegate = (function () {
  function ParserDelegate(AST, parse) {
    _classCallCheck(this, ParserDelegate);

    _get(Object.getPrototypeOf(ParserDelegate.prototype), "constructor", this).call(this, AST, parse);
  }

  _prototypeProperties(ParserDelegate, null, {
    capitalizedLineStarterMustache: {
      value: function capitalizedLineStarterMustache(node) {
        if (node.mustache) {
          node.mustache = this.handleCapitalizedMustache(node.mustache);
          return node;
        } else {
          return this.handleCapitalizedMustache(node);
        }
      },
      writable: true,
      configurable: true
    },
    handleCapitalizedMustache: {
      value: function handleCapitalizedMustache(mustache) {
        return mustache;
      },
      writable: true,
      configurable: true
    },
    rawMustacheAttribute: {
      value: function rawMustacheAttribute(key, id) {
        var mustacheNode = this.createMustacheNode([id], null, true);

        mustacheNode = this.handleUnboundSuffix(mustacheNode, id);

        return [new this.AST.ContentNode(key + "=" + "\""), mustacheNode, new this.AST.ContentNode("\"")];
      },
      writable: true,
      configurable: true
    },
    handleUnboundSuffix: {
      value: function handleUnboundSuffix(mustacheNode, id) {
        return mustacheNode;
      },
      writable: true,
      configurable: true
    },
    unshiftParam: {

      // Returns a new MustacheNode with a new preceding param (id).
      value: function unshiftParam(mustacheNode, helperName, newHashPairs) {
        var hash = mustacheNode.hash;

        // Merge hash.
        if (newHashPairs) {
          hash = hash || new this.AST.HashNode([]);

          for (var i = 0; i < newHashPairs.length; ++i) {
            hash.pairs.push(newHashPairs[i]);
          }
        }

        var params = [mustacheNode.id].concat(mustacheNode.params);
        params.unshift(new this.AST.IdNode([{ part: helperName }]));
        return this.createMustacheNode(params, hash, mustacheNode.escaped);
      },
      writable: true,
      configurable: true
    },
    createMustacheNode: {
      value: function createMustacheNode(params, hash, escaped) {
        var open = escaped ? "{{" : "{{{";
        return new this.AST.MustacheNode(params, hash, open, { left: false, right: false });
      },
      writable: true,
      configurable: true
    },
    createProgramNode: {
      value: function createProgramNode(statements, inverse) {
        return new this.AST.ProgramNode(statements, { left: false, right: false }, inverse, null);
      },
      writable: true,
      configurable: true
    }
  });

  return ParserDelegate;
})();

exports['default'] = ParserDelegate;