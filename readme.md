# ISO-639-1


Simple interface for [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes

## Installation

```
npm install iso-639-1
```

## Methods

### getName(code) 
  - @param code {string}
  - @return {string}

Lookup language english name by code

### getNativeName(code) 
  - @param code {string}
  - @return {string}

Lookup language native name by code


### getCode(name) 
  - @param name {string}
  - @return {string}

Lookup code by english name or native name

### validate(code) 
  - @param code {string}
  - @return {boolean}

Check whether the given code is in the list of [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### getLanguages(codes) 
  - @param codes {array}
  - @return {array}

Get the array of the language objects by the given codes

## Usage

```
var ISO6391 = require('./iso-639-1')

console.log(ISO6391.getName('zh')) // 'Chinese'
console.log(ISO6391.getNativeName('zh')) // '中文'

console.log(ISO6391.getCode('Chinese')) // 'en'
console.log(ISO6391.getCode('中文')) // 'en'

console.log(ISO6391.validate('en')) // true
console.log(ISO6391.validate('xxx')) // false

console.log(ISO6391.getLanguages(['en', 'zh'])) 
// [{code:'en',name:'English',nativeName:'English'},{code:'zh',name:'Chinese',nativeName:'中文'}]

```