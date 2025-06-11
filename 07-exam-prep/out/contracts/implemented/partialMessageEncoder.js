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
var PartialMessageEncoder_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialMessageEncoder = void 0;
//DO NOT CHANGE
const decorators_1 = require("../../decorators");
let PartialMessageEncoder = class PartialMessageEncoder {
    static { PartialMessageEncoder_1 = this; }
    _language;
    _cipher;
    static forbiddenSymbols = ['_', ',', '.', '!', '?', '-', ';', ' '];
    constructor(language, cipher) {
        this._language = language;
        this._cipher = cipher;
    }
    get language() {
        return this._language;
    }
    get cipher() {
        return this._cipher;
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = PartialMessageEncoder_1.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replace(x, ''));
        return message;
    }
    encodeMessage(secretMessage) {
        if (secretMessage.length === 0) {
            throw new Error('No message.');
        }
        let encodedMessage = this._cipher.encipher(secretMessage);
        return encodedMessage;
    }
};
exports.PartialMessageEncoder = PartialMessageEncoder;
exports.PartialMessageEncoder = PartialMessageEncoder = PartialMessageEncoder_1 = __decorate([
    decorators_1.decorator4,
    __metadata("design:paramtypes", [Object, Object])
], PartialMessageEncoder);
//# sourceMappingURL=partialMessageEncoder.js.map