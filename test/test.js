import assert from 'assert';
import ISO6391 from '../build/index';
import LANGUAGES_LIST from '../build/data';

describe('getName()', () => {
  it('en', () => assert.equal(ISO6391.getName('en'), 'English'))
  it('zh', () => assert.equal(ISO6391.getName('zh'), 'Chinese'))
})

describe('getNativeName()', () => {
  it('en', () => assert.equal(ISO6391.getNativeName('en'), 'English'))
  it('zh', () => assert.equal(ISO6391.getNativeName('zh'), '中文'))
})

describe('getAllNames()', () => {
  it('All languages english names match', () => assert.deepEqual(ISO6391.getAllNames(), Object.values(LANGUAGES_LIST).map(l => l.name)))
})

describe('getAllNativeNames()', () => {
  it('All languages native names match', () => {
    assert.deepEqual(ISO6391.getAllNativeNames(), Object.values(LANGUAGES_LIST).map(l => l.nativeName))
  })
})

describe('getCode()', () => {
  it('English', () => assert.equal(ISO6391.getCode('English'), 'en'))
  it('Chinese', () => assert.equal(ISO6391.getCode('Chinese'), 'zh'))
  it('中文', () => assert.equal(ISO6391.getCode('中文'), 'zh'))
})

describe('getAllCodes()', () => {
  it('All Codes Match', () => assert.deepEqual(ISO6391.getAllCodes(), Object.keys(LANGUAGES_LIST)))
})

describe('validate()', () => {
  it('en', () => assert.equal(ISO6391.validate('en'), true))
  it('zh', () => assert.equal(ISO6391.validate('zh'), true))
  it('aa', () => assert.equal(ISO6391.validate('aa'), true))
  it('bb', () => assert.equal(ISO6391.validate('bb'), false))
})

describe('getLanguages()', () => {
  it('[en,zh]', () => assert.deepEqual(ISO6391.getLanguages(['en', 'zh']), [
      {
        code: 'en',
        name: 'English',
        nativeName: 'English'
      },
      {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文'
      }
    ])
  )
})
