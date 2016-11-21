import LANGUAGES_LIST from './data';

export default class ISO6391 {
  static getLanguages = (codes) => (
    Object.entries(LANGUAGES_LIST)
      .filter(([code, language]) => codes.includes(code))
      .map(([code, language]) => ({ ...language, code }))
  )

  static getName = (code) => ISO6391.validate(code) ? LANGUAGES_LIST[code].name : ''

  static getAllNames = () => Object.values(LANGUAGES_LIST).map(l => l.name)

  static getNativeName = (code) => ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : ''

  static getAllNativeNames = () => Object.values(LANGUAGES_LIST).map(l => l.nativeName)

  static getCode = (name) => {
    const [code] = Object.entries(LANGUAGES_LIST)
      .find(([code, language]) => language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase())

    return code === undefined ? '' : code
  }

  static getAllCodes = () => Object.keys(LANGUAGES_LIST)

  static validate = (code) => LANGUAGES_LIST[code] !== undefined
}