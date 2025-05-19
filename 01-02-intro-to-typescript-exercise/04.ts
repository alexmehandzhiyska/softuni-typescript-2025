function convertArrays(words: string[]): [string, number] {
    const text = words.join('');

    return [
        text,
        text.length
    ];
}

console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
