var assert = require('assert')
var ISO6391 = require('../build/index')
var DATA = require('../build/data')
var codeList = DATA.CODE_LIST

var nameList = []
var nativeNameList = []

for( var code in DATA.LANGUAGES_LIST ){
  nameList.push( DATA.LANGUAGES_LIST[code].name)
  nativeNameList.push( DATA.LANGUAGES_LIST[code].nativeName)
}

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

describe( 'getAllNames()', function(){
    it('All languages english names match',function(){
      assert.deepEqual(ISO6391.getAllNames(), nameList)
    })
})

describe( 'getAllNativeNames()', function(){
    it('All languages native names match',function(){
      assert.deepEqual(ISO6391.getAllNativeNames(), nativeNameList)
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

describe('getAllCodes()', function() {
  it( 'All Codes Match', function(){
    assert.deepEqual(ISO6391.getAllCodes(), codeList)
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
