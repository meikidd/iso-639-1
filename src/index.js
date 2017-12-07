import LANGUAGES_LIST from './data';

function objectValues(object) {
  const result = [];
  for (const key of object) {
    if (object.hasOwnProperty(key)) {
      result.push(object[key]);
    }
  }
  return result;
}

function arrayFind(array, fn) {
  const len = array.length;
  for (let i=0; i < len; i++) {
    const item = array[i];
    if (fn(item)) {
      return item;
    }
  }
  return undefined;
}

export default class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      name: ISO6391.getName(code),
      nativeName: ISO6391.getNativeName(code),
    }));
  }

  static getName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].name : '';
  }

  static getAllNames() {
    return objectValues(LANGUAGES_LIST).map(l => l.name);
  }

  static getNativeName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : '';
  }

  static getAllNativeNames() {
    return objectValues(LANGUAGES_LIST).map(l => l.nativeName);
  }

  static getCode(name) {
    const code = arrayFind(Object.keys(LANGUAGES_LIST), code => {
      const language = LANGUAGES_LIST[code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  static getAllCodes() {
    return Object.keys(LANGUAGES_LIST);
  }

  static validate(code) {
    return LANGUAGES_LIST[code] !== undefined;
  }
}
