const assert = require('assert');
const ISO6391 = require('../src/index');

describe('getName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getName('en'), 'English');
  });
  it('zh', function() {
    assert.equal(ISO6391.getName('zh'), 'Chinese');
  });
  it('xx', function() {
    assert.equal(ISO6391.getName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getName('toString'), '');
  });
});

describe('getAllNames()', function() {
  it('should return an array', function() {
    assert.ok(Array.isArray(ISO6391.getAllNames()));
  });

  it('should return an array of strings', function() {
    const names = ISO6391.getAllNames();
    assert.ok(names.every(name => typeof name === 'string'));
  });

  it('should return all language names', function() {
    const allNamesFromData = Object.values(require('../src/data')).map(lang => lang.name);
    assert.deepEqual(ISO6391.getAllNames().sort(), allNamesFromData.sort());
  });

  it('should return a copy of the names array', function() {
    const names1 = ISO6391.getAllNames();
    const names2 = ISO6391.getAllNames();
    assert.notStrictEqual(names1, names2);
  });
});

describe('getAllNativeNames()', function() {
  it('should return an array', function() {
    assert.ok(Array.isArray(ISO6391.getAllNativeNames()));
  });

  it('should return an array of strings', function() {
    const nativeNames = ISO6391.getAllNativeNames();
    assert.ok(nativeNames.every(nativeName => typeof nativeName === 'string'));
  });

  it('should return all language native names', function() {
    const allNativeNamesFromData = Object.values(require('../src/data')).map(lang => lang.nativeName);
    assert.deepEqual(ISO6391.getAllNativeNames().sort(), allNativeNamesFromData.sort());
  });

  it('should return a copy of the native names array', function() {
    const nativeNames1 = ISO6391.getAllNativeNames();
    const nativeNames2 = ISO6391.getAllNativeNames();
    assert.notStrictEqual(nativeNames1, nativeNames2);
  });
});

describe('getAllCodes()', function() {
  it('should return an array', function() {
    assert.ok(Array.isArray(ISO6391.getAllCodes()));
  });

  it('should return an array of strings', function() {
    const codes = ISO6391.getAllCodes();
    assert.ok(codes.every(code => typeof code === 'string'));
  });

  it('should return all language codes', function() {
    const allCodesFromData = Object.keys(require('../src/data'));
    assert.deepEqual(ISO6391.getAllCodes().sort(), allCodesFromData.sort());
  });

  it('should return a copy of the codes array', function() {
    const codes1 = ISO6391.getAllCodes();
    const codes2 = ISO6391.getAllCodes();
    assert.notStrictEqual(codes1, codes2);
  });
});

describe('getNativeName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getNativeName('en'), 'English');
  });
  it('zh', function() {
    assert.equal(ISO6391.getNativeName('zh'), '中文');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNativeName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNativeName('toString'), '');
  });
});

describe('getCode()', function() {
  it('English', function() {
    assert.equal(ISO6391.getCode('English'), 'en');
  });
  it('Chinese', function() {
    assert.equal(ISO6391.getCode('Chinese'), 'zh');
  });
  it('中文', function() {
    assert.equal(ISO6391.getCode('中文'), 'zh');
  });
  it('xx', function() {
    assert.equal(ISO6391.getCode('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getCode('toString'), '');
  });
});

describe('validate()', function() {
  it('en', function() {
    assert.equal(ISO6391.validate('en'), true);
  });
  it('zh', function() {
    assert.equal(ISO6391.validate('zh'), true);
  });
  it('xx', function() {
    assert.equal(ISO6391.validate('xx'), false);
  });
  it('toString', function() {
    assert.equal(ISO6391.validate('toString'), false);
  });
});

describe('getLanguages()', function() {
  it('[en, zh, xx, toString]', function() {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx', 'toString']), [
      {
        code: 'en',
        name: 'English',
        nativeName: 'English',
      },
      {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文',
      },
      {
        code: 'xx',
        name: '',
        nativeName: '',
      },
      {
        code: 'toString',
        name: '',
        nativeName: '',
      },
    ]);
  });

  it('should return an empty array when given an empty array', function() {
    assert.deepEqual(ISO6391.getLanguages([]), []);
  });

  it('should return an array of all languages when given all valid codes', function() {
    const allCodes = Object.keys(require('../src/data'));
    const expectedLanguages = allCodes.map(code => ({
      code,
      name: ISO6391.getName(code),
      nativeName: ISO6391.getNativeName(code),
    }));
    assert.deepEqual(ISO6391.getLanguages(allCodes), expectedLanguages);
  });

  it('should return an array of empty language objects when given all invalid codes', function() {
    const invalidCodes = ['xx', 'yy', 'zz'];
    const expectedLanguages = invalidCodes.map(code => ({
      code,
      name: '',
      nativeName: '',
    }));
    assert.deepEqual(ISO6391.getLanguages(invalidCodes), expectedLanguages);
  });

  it('should return a new array with new objects', function() {
    const codes = ['en', 'zh'];
    const languages1 = ISO6391.getLanguages(codes);
    const languages2 = ISO6391.getLanguages(codes);

    assert.notStrictEqual(languages1, languages2);
    languages1.forEach((lang, index) => {
      assert.notStrictEqual(lang, languages2[index]);
    });
  });
});
