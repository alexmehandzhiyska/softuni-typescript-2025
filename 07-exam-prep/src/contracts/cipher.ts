//DO NOT CHANGE
export interface Cipher<T> {
    get language(): T
    encipher(text: string): string;
    decipher(text: string): string;
}