'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ISO6391 = function () {
  function ISO6391() {
    (0, _classCallCheck3.default)(this, ISO6391);
  }

  (0, _createClass3.default)(ISO6391, null, [{
    key: 'getLanguages',
    value: function getLanguages() {
      var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return codes.map(function (code) {
        return {
          code: code,
          name: ISO6391.getName(code),
          nativeName: ISO6391.getNativeName(code)
        };
      });
    }
  }, {
    key: 'getName',
    value: function getName(code) {
      return ISO6391.validate(code) ? _data2.default[code].name : '';
    }
  }, {
    key: 'getAllNames',
    value: function getAllNames() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.name;
      });
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      return ISO6391.validate(code) ? _data2.default[code].nativeName : '';
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.nativeName;
      });
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      var code = (0, _keys2.default)(_data2.default).find(function (code) {
        var language = _data2.default[code];

        return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
      });
      return code || '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return (0, _keys2.default)(_data2.default);
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      return _data2.default[code] !== undefined;
    }
  }]);
  return ISO6391;
}();

exports.default = ISO6391;
module.exports = exports['default'];