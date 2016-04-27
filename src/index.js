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
  static getAllNames(){
    var list = [];
    for( var code in DATA.LANGUAGES_LIST ){
      list.push(DATA.LANGUAGES_LIST[code].name)
    }
    return list;
  }
  static getNativeName(code) {
    if(!ISO6391.validate(code)) return ''
    return DATA.LANGUAGES_LIST[code].nativeName
  }
  static getAllNativeNames(){
    var list = [];
    for( var code in DATA.LANGUAGES_LIST ){
      list.push(DATA.LANGUAGES_LIST[code].nativeName)
    }
    return list;
  }
  static getCode(name) {
    for (var i = 0; i < DATA.CODE_LIST.length; i++) {
      var code = DATA.CODE_LIST[i]
      var language = DATA.LANGUAGES_LIST[code]
      if(language.name === name || language.nativeName === name) return code
    }
    return ''
  }
  static getAllCodes(){
    return DATA.CODE_LIST;
  }
  static validate(code) {
    if(DATA.CODE_LIST.indexOf(code) === -1) {
      return false
    } else {
      return true
    }
  }
}