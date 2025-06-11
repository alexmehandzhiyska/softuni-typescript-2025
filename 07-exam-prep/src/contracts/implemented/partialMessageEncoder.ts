//DO NOT CHANGE
import { decorator4 } from "../../decorators";
import { Cipher } from "../cipher";
import { MessageEncoder } from "../messageEncoder";


@decorator4
export abstract class PartialMessageEncoder implements MessageEncoder {
    protected _language: unknown;
    protected _cipher: unknown;
    public static forbiddenSymbols: string[] = ['_', ',', '.', '!', '?', '-', ';', ' ']

    constructor(
        language: unknown,
        cipher: unknown) {
        this._language = language;
        this._cipher = cipher;
    }

    protected get language(): { charset: Set<string>, isCompatibleToCharset(message: string): boolean } {
        return <any>this._language;
    }

    protected get cipher(): Cipher<{ charset: Set<string>, isCompatibleToCharset(message: string): boolean }> {
        return <any>this._cipher;
    }

    protected stripForbiddenSymbols(message: string) {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replace(x, ''));
        return message;
    }


    public encodeMessage(secretMessage: unknown) {
        if ((<any>secretMessage).length === 0) {
            throw new Error('No message.');
        }

        let encodedMessage = (<any>this._cipher).encipher(secretMessage);
        return encodedMessage;
    }

    public abstract decodeMessage(secretMessage: unknown): string;

    public abstract totalProcessedCharacters(type: string): string;
}