//DO NOT CHANGE
export interface MessageEncoder {
    encodeMessage(secretMessage: unknown): string;
    decodeMessage(secretMessage: unknown): string;
    totalProcessedCharacters(type: 'Encoded' | 'Decoded' | 'Both'): string;
}