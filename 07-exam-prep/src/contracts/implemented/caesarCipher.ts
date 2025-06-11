//DO NOT CHANGE
import { decorator1, decorator2, decorator3 } from "../../decorators";
import { Cipher } from "../cipher";

@decorator1
export class CaesarCipher<T extends { charset: Set<string>, isCompatibleToCharset(message: string): boolean }> implements Cipher<T> {
    protected _offset: number = 2;

    constructor(private _language: T) { }

    get language(): T {
        return this._language;
    }

    @decorator2
    encipher(text: string): string {
        let characters = text.split('');
        let setValues = [...this._language.charset.values()];
        let charsetCount = this._language.charset.size;
        let encoded = characters.map(x => {
            let finalOffset = (setValues.indexOf(x) + this._offset) % charsetCount;
            return setValues[finalOffset];
        });

        return encoded.join('');
    }

    @decorator3
    decipher(text: string): string {
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
}