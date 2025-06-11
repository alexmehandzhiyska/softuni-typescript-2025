"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    encodedCharsCount = 0;
    decodedCharsCount = 0;
    constructor(lang, cipher) {
        super(lang, cipher);
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMessage);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        const encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCharsCount += encodedMessage.length;
        return encodedMessage;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const isCompatible = this.language.isCompatibleToCharset(secretMessage);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        const decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCharsCount += decodedMessage.length;
        return decodedMessage;
    }
    totalProcessedCharacters(type) {
        let totalChars = 0;
        switch (type) {
            case 'Encoded':
                totalChars = this.encodedCharsCount;
                break;
            case 'Decoded':
                totalChars = this.decodedCharsCount;
                break;
            case 'Both':
                totalChars = this.encodedCharsCount + this.decodedCharsCount;
                break;
        }
        return `Total processed characters count: ${totalChars}`;
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map