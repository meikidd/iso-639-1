'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _data = require('./data');

var DATA = _interopRequireWildcard(_data);

var ISO6391 = (function () {
  function ISO6391() {
    _classCallCheck(this, ISO6391);
  }

  _createClass(ISO6391, null, [{
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var list = [];
      for (var i = 0; i < codes.length; i++) {
        list.push({
          code: codes[i],
          name: ISO6391.getName(codes[i]),
          nativeName: ISO6391.getNativeName(codes[i])
        });
      }
      return list;
    }
  }, {
    key: 'getName',
    value: function getName(code) {
      if (!ISO6391.validate(code)) return '';
      return DATA.LANGUAGES_LIST[code].name;
    }
  }, {
    key: 'getAllNames',
    value: function getAllNames() {
      var list = [];
      for (var code in DATA.LANGUAGES_LIST) {
        list.push(DATA.LANGUAGES_LIST[code].name);
      }
      return list;
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      if (!ISO6391.validate(code)) return '';
      return DATA.LANGUAGES_LIST[code].nativeName;
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      var list = [];
      for (var code in DATA.LANGUAGES_LIST) {
        list.push(DATA.LANGUAGES_LIST[code].nativeName);
      }
      return list;
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      for (var i = 0; i < DATA.CODE_LIST.length; i++) {
        var code = DATA.CODE_LIST[i];
        var language = DATA.LANGUAGES_LIST[code];
        if (language.name === name || language.nativeName === name) return code;
      }
      return '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return DATA.CODE_LIST;
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      if (DATA.CODE_LIST.indexOf(code) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }]);

  return ISO6391;
})();

exports['default'] = ISO6391;
module.exports = exports['default'];