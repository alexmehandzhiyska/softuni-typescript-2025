"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCipher_1 = require("./contracts/implemented/caesarCipher");
const languageMessageEncoder_1 = require("./languageMessageEncoder");
const lowercaseCharactersOnlyLanguage_1 = require("./contracts/implemented/lowercaseCharactersOnlyLanguage");
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
// Example 1
// let lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let caesarCipher = new CaesarCipher(lowercaseCharsLanguage);
// let encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<LowercaseCharactersOnlyLanguage>>(lowercaseCharsLanguage, caesarCipher);
// let encodedMessage = encoder.encodeMessage('the carthaginians are coming');
// console.log(encodedMessage);
// let decodedMessage = encoder.decodeMessage(encodedMessage);
// console.log(decodedMessage);
// console.log(encoder.totalProcessedCharacters('Both'));
// let encodedMessage2 = encoder.encodeMessage('!abc_');
// console.log(encodedMessage2);
// let decodedMessage2 = encoder.decodeMessage(encodedMessage2);
// console.log(decodedMessage2);
// console.log(encoder.totalProcessedCharacters('Encoded'));
// Example 2
// let lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let caesarCipher = new CaesarCipher(lowercaseCharsLanguage);
// let encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<LowercaseCharactersOnlyLanguage>>(lowercaseCharsLanguage, caesarCipher);
// let encodedMessage = encoder.encodeMessage(undefined);
// console.log(encodedMessage);
// let decodedMessage = encoder.decodeMessage(true);
// console.log(decodedMessage);
// let encodedMessage2 = encoder.encodeMessage(undefined);
// console.log(encodedMessage2);
// let decodedMessage2 = encoder.decodeMessage(true);
// console.log(decodedMessage2);
// let encodedMessage3 = encoder.encodeMessage('1abc');
// console.log(encodedMessage3);
// let decodedMessage3 = encoder.decodeMessage('test"12"');
// console.log(decodedMessage3);
// Example 3
// let lowercaseCharsLanguage = new LowercaseCharactersOnlyLanguage();
// let caesarCipher = new CaesarCipher(lowercaseCharsLanguage);
// lowercaseCharsLanguage.charset.add('A')
// let encoder = new LanguageMessageEncoder<LowercaseCharactersOnlyLanguage, CaesarCipher<Language>>(lowercaseCharsLanguage, caesarCipher);
// encoder.totalProcessedCharacters('age');
// Example 4
// let dnaCharsLanguage = new DNACodeLanguage();
// let caesarCipher = new CaesarCipher(dnaCharsLanguage);
// let encoder = new LanguageMessageEncoder<DNACodeLanguage, CaesarCipher<DNACodeLanguage>>(dnaCharsLanguage, caesarCipher);
// let encodedMessage = encoder.encodeMessage('ACGT');
// console.log(encodedMessage);
// let decodedMessage = encoder.decodeMessage(encodedMessage);
// console.log(decodedMessage);
// let encodedMessage2 = encoder.encodeMessage('GAGCCCTCA');
// console.log(encodedMessage2);
// let decodedMessage2 = encoder.decodeMessage(encodedMessage2);
// console.log(decodedMessage2);
// let decodedMessage3 = encoder.decodeMessage('AGGCAT');
// console.log(decodedMessage3);
// let decodedMessage4 = encoder.decodeMessage('DACG');
// console.log(decodedMessage4);
// console.log(encoder.totalProcessedCharacters('Both'));
// Example 5
// let dnaCharsLanguage = new DNACodeLanguage();
// dnaCharsLanguage.charset.add('B');
// Example 6
let lowercaseCharsLanguage = new lowercaseCharactersOnlyLanguage_1.LowercaseCharactersOnlyLanguage();
let caesarCipher = new caesarCipher_1.CaesarCipher(lowercaseCharsLanguage);
let encoder = new languageMessageEncoder_1.LanguageMessageEncoder(lowercaseCharsLanguage, caesarCipher);
let encodedMessage = encoder.encodeMessage('there is no "spoon"');
console.log(encodedMessage);
let decodedMessage = encoder.decodeMessage(encodedMessage);
console.log(decodedMessage);
let encodedMessage2 = encoder.encodeMessage("in cryptography, a 'cipher' is an algorithm for performing encryption or decryption - a series of well-defined steps that can be followed as a procedure.");
console.log(encodedMessage2);
let decodedMessage2 = encoder.decodeMessage(encodedMessage2);
console.log(decodedMessage2);
console.log(encoder.totalProcessedCharacters('Both'));
let encodedMessage3 = encoder.encodeMessage('_test;b1c2');
console.log(encodedMessage3);
let encodedMessage4 = encoder.encodeMessage('_test;b-c');
console.log(encodedMessage4);
let decodedMessage3 = encoder.decodeMessage('"hello" he said');
console.log(decodedMessage3);
console.log(encoder.totalProcessedCharacters('Decoded'));
console.log(partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols);
//# sourceMappingURL=index.js.map