"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaesarCipher = void 0;
//DO NOT CHANGE
const decorators_1 = require("../../decorators");
let CaesarCipher = class CaesarCipher {
    _language;
    _offset = 2;
    constructor(_language) {
        this._language = _language;
    }
    get language() {
        return this._language;
    }
    // @decorator2
    encipher(text) {
        let characters = text.split('');
        let setValues = [...this._language.charset.values()];
        let charsetCount = this._language.charset.size;
        let encoded = characters.map(x => {
            let finalOffset = (setValues.indexOf(x) + this._offset) % charsetCount;
            return setValues[finalOffset];
        });
        return encoded.join('');
    }
    // @decorator3
    decipher(text) {
        let characters = text.split('');
        let setValues = [...this._language.charset.values()];
        let charsetCount = this._language.charset.size;
        let decoded = characters.map(x => {
            let initialOffset = setValues.indexOf(x);
            let finalOffset = (initialOffset - this._offset + charsetCount) % charsetCount;
            return setValues[finalOffset];
        });
        return decoded.join('');
    }
};
exports.CaesarCipher = CaesarCipher;
exports.CaesarCipher = CaesarCipher = __decorate([
    decorators_1.decorator1,
    __metadata("design:paramtypes", [Object])
], CaesarCipher);
//# sourceMappingURL=caesarCipher.js.map