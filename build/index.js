'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && !window._babelPolyfill || typeof global !== 'undefined' && !global._babelPolyfill) {
  require('babel-polyfill');
}

var ISO6391 = function ISO6391() {
  (0, _classCallCheck3.default)(this, ISO6391);
};

ISO6391.getLanguages = function () {
  var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _entries2.default)(_data2.default).filter(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        code = _ref2[0],
        language = _ref2[1];

    return codes.includes(code);
  }).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
        code = _ref4[0],
        language = _ref4[1];

    return (0, _extends3.default)({}, language, { code: code });
  });
};

ISO6391.getName = function (code) {
  return ISO6391.validate(code) ? _data2.default[code].name : '';
};

ISO6391.getAllNames = function () {
  return (0, _values2.default)(_data2.default).map(function (l) {
    return l.name;
  });
};

ISO6391.getNativeName = function (code) {
  return ISO6391.validate(code) ? _data2.default[code].nativeName : '';
};

ISO6391.getAllNativeNames = function () {
  return (0, _values2.default)(_data2.default).map(function (l) {
    return l.nativeName;
  });
};

ISO6391.getCode = function (name) {

  var code = (0, _keys2.default)(_data2.default).find(function (code) {
    var language = _data2.default[code];
    return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
  });

  return code === undefined ? '' : code;
};

ISO6391.getAllCodes = function () {
  return (0, _keys2.default)(_data2.default);
};

ISO6391.validate = function (code) {
  return _data2.default[code] !== undefined;
};

exports.default = ISO6391;
module.exports = exports['default'];