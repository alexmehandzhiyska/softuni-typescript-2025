//DO NOT CHANGE
type languageLiteral = { charset: Set<string>, isCompatibleToCharset(message: string): boolean };
export class LowercaseCharactersOnlyLanguage implements languageLiteral {
    private _charset: Set<'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'> =
        new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(sample: string): boolean {
        let allChars = sample.split('');
        let isCompatible = allChars.every(x => x >= 'a' && x <= 'z');
        return isCompatible;
    }
}