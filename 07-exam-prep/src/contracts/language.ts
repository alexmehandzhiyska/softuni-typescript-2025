//DO NOT CHANGE
export interface Language {
    get charset(): Set<string>;
    isCompatibleToCharset(message: string): boolean;
}