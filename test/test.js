const assert = require('assert');
const ISO6391 = require('../build/index');

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
});

describe('getLanguages()', function() {
  it('[en, zh, xx]', function() {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx']), [
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
    ]);
  });
});
