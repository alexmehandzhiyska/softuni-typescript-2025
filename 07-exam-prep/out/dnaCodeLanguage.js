"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNACodeLanguage = void 0;
class DNACodeLanguage {
    _charset = new Set(['A', 'C', 'G', 'T']);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(message) {
        const messageChars = message.split('');
        const allowedChars = Array.from(this.charset.values());
        const isCompatible = messageChars.every(ch => allowedChars.includes(ch));
        return isCompatible;
    }
}
exports.DNACodeLanguage = DNACodeLanguage;
//# sourceMappingURL=dnaCodeLanguage.js.map