var assert = require('assert')
var ISO6391 = require('../build/index')


describe('getName()', function() {
  it('en', function(){
    assert.equal(ISO6391.getName('en'), 'English')
  })
  it('zh', function(){
    assert.equal(ISO6391.getName('zh'), 'Chinese')
  })
})

describe('getNativeName()', function() {
  it('en', function(){
    assert.equal(ISO6391.getNativeName('en'), 'English')
  })
  it('zh', function(){
    assert.equal(ISO6391.getNativeName('zh'), '中文')
  })
})

describe('getCode()', function() {
  it('English', function(){
    assert.equal(ISO6391.getCode('English'), 'en')
  })
  it('Chinese', function(){
    assert.equal(ISO6391.getCode('Chinese'), 'zh')
  })
  it('中文', function(){
    assert.equal(ISO6391.getCode('中文'), 'zh')
  })
})

describe('validate()', function() {
  it('en', function(){
    assert.equal(ISO6391.validate('en'), true)
  })
  it('zh', function(){
    assert.equal(ISO6391.validate('zh'), true)
  })
  it('aa', function(){
    assert.equal(ISO6391.validate('aa'), true)
  })
  it('bb', function(){
    assert.equal(ISO6391.validate('bb'), false)
  })
})

describe('getLanguages()', function() {
  it('[en,zh]', function(){
    assert.deepEqual(ISO6391.getLanguages(['en','zh']), [{code:'en',name:'English',nativeName:'English'},{code:'zh',name:'Chinese',nativeName:'中文'}])
  })
})