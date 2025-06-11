import { Cipher } from './contracts/cipher';
import { PartialMessageEncoder } from './contracts/implemented/partialMessageEncoder';
import { Language } from './contracts/language';
import { MessageEncoder } from './contracts/messageEncoder';
import { ProcessedCharsType } from './types';

export class LanguageMessageEncoder<
    TLang extends Language,
    TCipher extends Cipher<TLang>
> extends PartialMessageEncoder implements MessageEncoder {
    private encodedCharsCount = 0;
    private decodedCharsCount = 0;

    constructor(lang: TLang, cipher: TCipher) {
        super(lang, cipher);
    }

    public encodeMessage(secretMessage: unknown) {
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

    public decodeMessage(secretMessage: unknown): string {
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

    public totalProcessedCharacters(type: ProcessedCharsType): string {
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

    protected stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
}