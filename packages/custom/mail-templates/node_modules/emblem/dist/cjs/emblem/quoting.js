'use strict';

exports.repeat = repeat;
exports.escapeString = escapeString;
exports.string = string;

function escapeString(str) {
  str = str.replace(/\\/g, "\\\\");
  str = str.replace(/"/g, "\\\"");
  str = str.replace(/\n/g, "\\n");
  return str;
}

function string(str) {
  return "\"" + escapeString(str) + "\"";
}

function repeat(chars, times) {
  var str = "";
  while (times--) {
    str += chars;
  }
  return str;
}