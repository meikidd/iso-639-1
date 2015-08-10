import * as DATA from './data'

export default class ISO6391 {
  static getLanguages(codes) {
    var list = []
    for (var i = 0; i < codes.length; i++) {
      list.push({
        code:codes[i], 
        name: ISO6391.getName(codes[i]),
        nativeName: ISO6391.getNativeName(codes[i])
      })
    }
    return list
  }
  static getName(code) {
    if(!ISO6391.validate(code)) return ''
    return DATA.LANGUAGES_LIST[code].name
  }
  static getNativeName(code) {
    if(!ISO6391.validate(code)) return ''
    return DATA.LANGUAGES_LIST[code].nativeName
  }
  static getCode(name) {
    for (var i = 0; i < DATA.CODE_LIST.length; i++) {
      var code = DATA.CODE_LIST[i]
      var language = DATA.LANGUAGES_LIST[code]
      if(language.name === name || language.nativeName === name) return code
    }
    return ''
  }
  static validate(code) {
    if(DATA.CODE_LIST.indexOf(code) === -1) {
      return false
    } else {
      return true
    }
  }
}